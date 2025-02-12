import s from "./FeedMpPart.module.scss";
import {ImQuotesRight} from "react-icons/im";


const FeedMpPart = ({...props}) => {
    return (
        <div className={s.feedMpPartContainer}>
            <h4 className={s.title}>FeedMp</h4>
            <p className={s.comment}><ImQuotesRight className={s.quotesLeft}/>Все чудово!<ImQuotesRight
                className={s.quotesRight}/></p>
        </div>
    )
}
export default FeedMpPart;
