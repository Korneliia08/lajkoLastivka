import style from "../../PageFilter.module.scss";
import StarsRating from "../../../../components/ui/starsRating/StarsRating.jsx";
import Lottie from "lottie-react";
import localS from "./PageFilterChooseStars.module.scss";
import reaction5 from "../../../../assets/animations/reaction5.json";
import reaction1 from "../../../../assets/animations/reaction1.json";
import reaction2 from "../../../../assets/animations/reaction2.json";
import reaction3 from "../../../../assets/animations/reaction3.json";
import reaction4 from "../../../../assets/animations/reaction4.json";
import cn from "@/functions/cn.js";

const PageFilterChooseStars = ({
  isLoadingStars,
  setStars,
  stars,
  sendStars,
  prev = false,
}) => {
  return (
    <>
      <p className={style.content}>Наскільки Ви задоволені покупкою?</p>
      <div className={localS.reactionDiv}>
        {stars === 5 && (
          <Lottie
            animationData={reaction5}
            className={cn(localS.reaction, localS.r5)}
          />
        )}
        {stars === 1 && (
          <Lottie
            animationData={reaction1}
            className={cn(localS.reaction, localS.r1)}
          />
        )}
        {stars === 2 && (
          <Lottie
            animationData={reaction2}
            className={cn(localS.reaction, localS.r2)}
          />
        )}
        {stars === 3 && (
          <Lottie
            animationData={reaction3}
            className={cn(localS.reaction, localS.r3)}
          />
        )}
        {stars === 4 && (
          <Lottie
            animationData={reaction4}
            className={cn(localS.reaction, localS.r4)}
          />
        )}
      </div>

      <div className={style.blockForStars}>
        <StarsRating value={stars} onChange={(stars) => setStars(stars)} />
      </div>
      <div className={style.blockForBtns}>
        <div className={localS.buttonAnimation}>
          {/*{stars < 4 && (*/}
          {/*  <Lottie className={localS.animation} animationData={sad} />*/}
          {/*)}*/}
          <button
            type={"button"}
            className={style.continueBtn}
            disabled={stars == 0 || isLoadingStars}
            onClick={sendStars}
          >
            Відправити
          </button>
        </div>
      </div>
    </>
  );
};
export default PageFilterChooseStars;
