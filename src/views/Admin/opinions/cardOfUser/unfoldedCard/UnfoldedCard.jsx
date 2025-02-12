import s from "./UnfoldedCard.module.scss";
import RozetkaPart from "@/views/Admin/opinions/cardOfUser/unfoldedCard/rozetkaPart/RozetkaPart.jsx";
import FeedMpPart from "@/views/Admin/opinions/cardOfUser/unfoldedCard/feedMpPart/FeedMpPart.jsx";


const UnfoldedCard = ({...props}) => {
    return (
        <div className={s.unfoldedCardContainer}>
            <FeedMpPart/>
            <RozetkaPart/>
        </div>
    )
}
export default UnfoldedCard;
