import style from "./PageFilter.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../providers/interceptors/refreshToken.interceptor.js";
import PageFileterOpinionHasAlreadyBeenIssued from "./components/pageFileterOpinionHasAlreadyBeenIssued/PageFileterOpinionHasAlreadyBeenIssued.jsx";
import PageFilterChooseStars from "./components/pageFilterChooseStars/PageFilterChooseStars.jsx";
import PageFilterComment from "./components/pageFilterComment/PageFilterComment.jsx";
import PageFilterLoader from "./components/pageFilterLoader/PageFilterLoader.jsx";

function PageFilter() {
  const { secretId } = useParams();
  const [stars, setStars] = useState(0);
  const [data, setData] = useState(undefined);
  const [stage, setStage] = useState("stars");
  const [notValidLink, setNotValidLink] = useState(false);
  const [opinionExist, setOpinionExist] = useState(false);
  useEffect(() => {
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

  if (notValidLink) return <h1>Недійсне посилання для огляду покупки</h1>;
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
    content = <PageFilterComment setStage={setStage} />;
  } else if (stage === "done") {
    content = (
      <>
        <br />
        <span className={style.thanksText}>
          Дякуємо за відгук! Твоя оцінка допомагає нам ставати кращими для тебе!
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
      <header className={style.blockForHeader}>
        <img
          src={
            imagesManual.logo
              ? import.meta.env.VITE_APP_API +
                "/messages/imageFromFile/" +
                btoa(imagesManual.logo)
              : data.order.store.bannerImg
          }
          alt="bannerImg"
          className={style.imgOfShop}
        />
        <div className={style.circleForLogo}>
          <img
            src={
              imagesManual.banner
                ? import.meta.env.VITE_APP_API +
                  "/messages/imageFromFile/" +
                  btoa(imagesManual.banner)
                : data.order.store.logoImg
            }
            alt="logoImg"
            className={style.logoOgShopImg}
          />
        </div>
      </header>
      <p className={style.titleOfShop}>Магазин - {data.order.store.name}</p>
      <p className={style.productTitle}>{data.title}</p>
      {content}
    </div>
  );
}

export default PageFilter;
