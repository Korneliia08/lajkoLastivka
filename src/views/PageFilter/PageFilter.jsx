import style from "./PageFilter.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../providers/interceptors/refreshToken.interceptor.js";
import PageFileterOpinionHasAlreadyBeenIssued from "./components/pageFileterOpinionHasAlreadyBeenIssued/PageFileterOpinionHasAlreadyBeenIssued.jsx";
import PageFilterChooseStars from "./components/pageFilterChooseStars/PageFilterChooseStars.jsx";
import PageFilterComment from "./components/pageFilterComment/PageFilterComment.jsx";

import success from "../../assets/animations/happy1.json";
import Lottie from "lottie-react";
import PageFilterLoader from "@/views/PageFilter/components/pageFilterLoader/PageFilterLoader.jsx";
import PageFilterBanner from "@/views/PageFilter/views/pageFilterBanner/PageFilterBanner.jsx";

function PageFilter() {
  const { secretId } = useParams();
  const [stars, setStars] = useState(1);
  const [data, setData] = useState(undefined);
  const [stage, setStage] = useState("stars");
  const [notValidLink, setNotValidLink] = useState(false);
  const [confettiArray, setConfettiArray] = useState([]);

  const isPrev = () => {
    return secretId.includes("prevTest");
  };

  useEffect(() => {
    setConfettiArray((prev) => {
      let arr = [];
      if (stars >= 4) {
        arr = [...prev, { value: success, time: new Date().getTime() }];
      }
      if (arr.length > 7) return arr.slice(2);
      return arr.length >= 2 ? arr.slice(1) : arr;
    });
  }, [stars]);

  useEffect(() => {
    if (isPrev()) {
      document.body.classList.add("no-scroll");
      (async () => {
        const res = await api.get(
          "stores/simpleStoreInformation/" + secretId.split("prevTest_")[1],
        );
        res;
        setData({
          order: {
            store: res.data,
          },
        });
        console.log(res.data);
      })();
      return;
    }

    (async () => {
      try {
        const res = await api.get(`orders/opinionItem/${secretId}`);

        setData(res.data);
      } catch (error) {
        setNotValidLink(true);
        return;
      }
    })();
  }, [secretId]);
  const [isLoadingStars, setLoadingStars] = useState(false);

  function isInWebView() {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  }

  async function sendStars() {
    if (isPrev()) {
      setLoadingStars(false);
      if (stars < 4) setStage("comment");
      return;
    }
    try {
      setLoadingStars(true);
      const res = await api.post("/localOpinions/setRatingScore/" + secretId, {
        ratingScore: stars,
      });
      if (res.data.code == 5) {
        //alert('już ocenione')
        return;
      }
      if (stars >= 4) {
        window.location.href = res.data.link + "/comments";
        console.log(res);
        if (isInWebView()) {
          setTimeout(() => {
            location.reload(); // Odświeżenie strony
          }, 1000); // Opóźnienie, aby poczekać na zakończenie przekierowania
        }
      } else {
        setStage("comment");
      }
    } catch (err) {
      console.log(err);
      return;
    }
    setLoadingStars(false);
  }

  if (notValidLink)
    return (
      <h1 className={style.noLink}>Недійсне посилання для огляду покупки</h1>
    );
  if (!data) return <PageFilterLoader />;
  let content = "";
  if (stage === "stars") {
    content = (
      <PageFilterChooseStars
        stars={stars}
        isLoadingStars={isLoadingStars}
        sendStars={sendStars}
        setStars={setStars}
      />
    );
  } else if (stage === "comment") {
    content = <PageFilterComment isPrev={isPrev} setStage={setStage} />;
  } else if (stage === "done") {
    content = (
      <>
        <br />
        <span className={style.thanksText}>
          Дякуємо за відгук! Ваша оцінка допомагає нам ставати кращими для тебе!
          🙏
        </span>{" "}
      </>
    );
  }

  if (data.localOpinion != null) {
    content = <PageFileterOpinionHasAlreadyBeenIssued />;
  }
  const imagesManual = { logo: undefined, banner: undefined };
  try {
    imagesManual.logo = data.order.messages[0].logoImage;
    imagesManual.banner = data.order.messages[0].image;
  } catch (error) {}

  return (
    <div className={style.container}>
      <PageFilterBanner data={data} imagesManual={imagesManual} />
      <p className={style.titleOfShop}>{data.order.store.name}</p>
      {/*<p className={style.productTitle}>{data.title}</p>*/}
      {content}
      <div className={style.animation}>
        {confettiArray.map((data, index) => (
          <Lottie
            key={data.time}
            className={style.animation}
            animationData={data.value}
            loop={false}
          />
        ))}
        {confettiArray.length}-
      </div>
    </div>
  );
}

export default PageFilter;
