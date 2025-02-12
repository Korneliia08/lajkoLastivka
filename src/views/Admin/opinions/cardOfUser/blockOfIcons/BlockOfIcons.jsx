import s from "./BlockOfIcons.module.scss";
import {PiStarFill} from "react-icons/pi";
import {TbMessageCancel} from "react-icons/tb";


const BlockOfIcons = ({...props}) => {
    return (
        <div className={s.blockOfIconsContainer}>
            {/*<TbMessage2Question/> 1-3 review gdy negatywnej opinii nie napisano*/}
            {/*<TbMessage2Exclamation/> 1-3 review gdy negatywna opinia napisana*/}
            {/*<TbMessage2Heart/> 1-5 reviw gdy pozytywna oponia na rozetce napisana*/}
            <TbMessageCancel className={s.iconStyle}/>
            <div className={s.blockForReviews}>
                <PiStarFill className={s.review}/>
                <PiStarFill className={s.review}/>
                <PiStarFill className={s.review}/>
                <PiStarFill className={s.review}/>
                <PiStarFill className={s.review}/>
            </div>
        </div>
    )
}
export default BlockOfIcons;
