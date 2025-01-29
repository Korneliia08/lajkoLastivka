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

  async function sendStars() {
    try {
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
      } else {
        setStage("comment");
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }

  if (notValidLink) return <h1>Недійсне посилання для огляду покупки</h1>;
  if (!data) return <PageFilterLoader />;
  let content = "";
  if (stage === "stars") {
    content = (
      <PageFilterChooseStars
        stars={stars}
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

  if (data.order.localOpinion != null) {
    content = <PageFileterOpinionHasAlreadyBeenIssued />;
  }
  return (
    <div className={style.container}>
      <header className={style.blockForHeader}>
        <img
          src={data.order.store.bannerImg}
          alt="bershkaImg"
          className={style.imgOfShop}
        />
        <div className={style.circleForLogo}>
          <img
            src={data.order.store.logoImg}
            alt="bershkaLogo"
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
