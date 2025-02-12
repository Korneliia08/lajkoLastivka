import s from "./BlockOfIcons.module.scss";
import { PiStarFill } from "react-icons/pi";
import { TbMessageCancel } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const BlockOfIcons = ({ setOpenBottomCard, isOpenBottomCard, ...props }) => {
  return (
    <div className={s.blockOfIconsContainer}>
      {/*<TbMessage2Question title={"Відгук на feedMP не залишено"}/>/> 1-3 review gdy negatywnej opinii nie napisano*/}
      {/*<TbMessage2Exclamation title={"Залишено відгук на feedMP"}/> 1-3 review gdy negatywna opinia napisana*/}
      {/*<TbMessage2Heart title={"Залишено відгук на розетці"}/> 1-5 reviw gdy pozytywna oponia na rozetce napisana*/}
      <TbMessageCancel
        className={s.iconStyle}
        title={"Відгук на розетці не залишено"}
      />
      <div className={s.blockForReviews}>
        <PiStarFill className={s.review} />
        <PiStarFill className={s.review} />
        <PiStarFill className={s.review} />
        <PiStarFill className={s.review} />
        <PiStarFill className={s.review} />
      </div>
      <IoIosArrowDown
        className={s.arrowBottom}
        onClick={() => setOpenBottomCard(!isOpenBottomCard)}
      />
    </div>
  );
};
export default BlockOfIcons;
