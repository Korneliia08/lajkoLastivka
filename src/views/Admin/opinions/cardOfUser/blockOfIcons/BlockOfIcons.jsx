import s from "./BlockOfIcons.module.scss";
import { PiStarFill } from "react-icons/pi";
import { TbMessageCancel } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import cn from "@/functions/cn.js";

const BlockOfIcons = ({
  data,
  setOpenBottomCard,
  isOpenBottomCard,
  ...props
}) => {
  let localOpinion = undefined;
  try {
    localOpinion = data.order.items[0].localOpinion;
  } catch (err) {}
  return (
    <div className={s.blockOfIconsContainer}>
      {/*<TbMessage2Question title={"Відгук на feedMP не залишено"}/>/> 1-3 review gdy negatywnej opinii nie napisano*/}
      {/*<TbMessage2Exclamation title={"Залишено відгук на feedMP"}/> 1-3 review gdy negatywna opinia napisana*/}
      {/*<TbMessage2Heart title={"Залишено відгук на розетці"}/> 1-5 reviw gdy pozytywna oponia na rozetce napisana*/}
      <TbMessageCancel
        className={s.iconStyle}
        title={"Відгук на розетці не залишено"}
      />
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
