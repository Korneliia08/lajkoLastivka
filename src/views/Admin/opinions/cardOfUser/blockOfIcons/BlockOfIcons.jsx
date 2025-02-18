import s from "./BlockOfIcons.module.scss";
import { PiStarFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import cn from "@/functions/cn.js";
import { TbMessage2Heart } from "react-icons/tb";

const BlockOfIcons = ({
  data,
  setOpenBottomCard,
  isOpenBottomCard,
  ...props
}) => {
  const opinion = data.order.items[0].opinion;

  let localOpinion = undefined;
  let stars = undefined;
  try {
    localOpinion = data.order.items[0].localOpinion;
    stars = localOpinion.ratingScore;
  } catch (err) {}

  const isGreen =
    (localOpinion &&
      localOpinion.opinion &&
      localOpinion.opinion.length !== 0) ||
    opinion;
  return (
    <div className={s.blockOfIconsContainer}>
      {/*<TbMessage2Question title={"Відгук на feedMP не залишено"}/>/> 1-3 review gdy negatywnej opinii nie napisano*/}
      {/*<TbMessage2Exclamation title={"Залишено відгук на feedMP"}/> 1-3 review gdy negatywna opinia napisana*/}
      <TbMessage2Heart
        color={isGreen ? "green" : "red"}
        title={isGreen ? "Залишено відгук" : "Відгук не залишено"}
      />
      {/*1-5 reviw gdy pozytywna oponia na rozetce napisana*/}
      {/*<TbMessageCancel*/}
      {/*  className={s.iconStyle}*/}
      {/*  title={"Відгук на розетці не залишено"}*/}
      {/*/>*/}
      {localOpinion && (
        <div className={s.blockForReviews}>
          {Array.from(Array(localOpinion.ratingScore).keys()).map((key) => {
            return (
              <PiStarFill
                key={key}
                className={cn(s.review, s["r" + localOpinion.ratingScore])}
              />
            );
          })}
        </div>
      )}
      <IoIosArrowDown
        className={cn(s.arrowBottom, data.id === isOpenBottomCard && s.rotate)}
        onClick={() => {
          if (data.id === isOpenBottomCard) {
            setOpenBottomCard(-2);
            return;
          }
          setOpenBottomCard(data.id);
        }}
      />
    </div>
  );
};
export default BlockOfIcons;
