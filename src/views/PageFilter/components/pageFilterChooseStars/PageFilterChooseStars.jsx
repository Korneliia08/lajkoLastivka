import style from "../../PageFilter.module.scss";
import StarsRating from "../../../../components/ui/starsRating/StarsRating.jsx";
import delivery from "../../../../assets/filterPage/delivery.png";
import cn from "@/functions/cn.js";
import Lottie from "lottie-react";
import sad from "../../../../assets/animations/sad1.json";
import localS from "./PageFilterChooseStars.module.scss";

const PageFilterChooseStars = ({
  isLoadingStars,
  setStars,
  stars,
  sendStars,
  prev = false,
}) => {
  return (
    <>
      <div className={cn(style.question, prev ? style.prev : "")}>
        <img src={delivery} alt="delivery" className={style.deliveryIcon} />
        <p className={style.content}>
          Наскільки ви задоволені покупкою?{" "}
          <span className={style.weightWord}>Дуже </span> чи є що вдосконалити?
        </p>
      </div>
      <div className={style.blockForStars}>
        <StarsRating onChange={(stars) => setStars(stars)} />
      </div>
      <div className={style.blockForBtns}>
        <button type={"button"} className={style.deleteBtn}>
          Скасувати
        </button>

        <div className={localS.buttonAnimation}>
          {stars < 4 && (
            <Lottie className={localS.animation} animationData={sad} />
          )}
          <button
            type={"button"}
            className={style.continueBtn}
            disabled={stars == 0 || isLoadingStars}
            onClick={sendStars}
          >
            Продовжити
          </button>
        </div>
      </div>
    </>
  );
};
export default PageFilterChooseStars;
