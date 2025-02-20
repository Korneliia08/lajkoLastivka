import style from "./PageFilter.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../providers/interceptors/refreshToken.interceptor.js";
import PageFileterOpinionHasAlreadyBeenIssued from "./components/pageFileterOpinionHasAlreadyBeenIssued/PageFileterOpinionHasAlreadyBeenIssued.jsx";
import PageFilterChooseStars from "./components/pageFilterChooseStars/PageFilterChooseStars.jsx";
import PageFilterComment from "./components/pageFilterComment/PageFilterComment.jsx";

import PageFilterLoader from "@/views/PageFilter/components/pageFilterLoader/PageFilterLoader.jsx";
import PageFilterBanner from "@/views/PageFilter/views/pageFilterBanner/PageFilterBanner.jsx";
import PageFilterCongratulations from "@/views/PageFilter/views/pageFilterCongratulations/PageFilterCongratulations.jsx";
import PageFilterDone from "@/views/PageFilter/views/pageFilterDone/PageFilterDone.jsx";

function PageFilter() {
  const { secretId } = useParams();
  const [stars, setStars] = useState(5);
  const [data, setData] = useState(undefined);
  const [stage, setStage] = useState("stars");
  const [notValidLink, setNotValidLink] = useState(false);
  const [goToUrl, setGoToUrl] = useState(null);
  const isPrev = () => {
    return secretId.includes("prevTest");
  };

  useEffect(() => {
    if (isPrev()) {
      document.body.classList.add("no-scroll");
      (async () => {
        const res = await api.get(
          "stores/simpleStoreInformation/" + secretId.split("prevTest_")[1],
        );
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

  async function sendStars() {
    if (isPrev()) {
      setLoadingStars(false);
      if (stars < 4) setStage("comment");
      if (stars >= 4) setStage("congratulations");
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
        setGoToUrl(res.data.link + "/comments");
        setStage("congratulations");
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
  } else if (stage === "congratulations") {
    content = <PageFilterCongratulations isPrev={isPrev} goToLink={goToUrl} />;
  } else if (stage === "done") {
    content = <PageFilterDone />;
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
      <div className={style.maxWidth}>
        <PageFilterBanner data={data} imagesManual={imagesManual} />
        {stage != "congratulations" && stage != "comment" && (
          <p className={style.titleOfShop}>{data.order.store.name}</p>
        )}
        {/*<p className={style.productTitle}>{data.title}</p>*/}
        {content}
      </div>
    </div>
  );
}

export default PageFilter;
