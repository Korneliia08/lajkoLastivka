import s from "./FeedMpPart.module.scss";
import WithRozetka from "@/views/Admin/opinions/cardOfUser/unfoldedCard/feedMpPart/withRozetka/WithRozetka.jsx";


const FeedMpPart = ({...props}) => {
    return (
        <div className={s.feedMpPartContainer}>
            {/*<WithoutRozetka/>*/}
            <WithRozetka/>
        </div>
    )
}
export default FeedMpPart;
