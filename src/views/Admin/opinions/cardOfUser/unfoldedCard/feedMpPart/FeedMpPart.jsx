import s from "./FeedMpPart.module.scss";
import {ImQuotesRight} from "react-icons/im";


const FeedMpPart = ({...props}) => {
    return (
        <div className={s.feedMpPartContainer}>
            <h4 className={s.title}>FeedMp</h4>
            <p className={s.comment}><ImQuotesRight className={s.quotesLeft}/>Годинник виглядає стильно, але батарея
                швидко сідає, а повідомлення іноді приходять із затримкою.!<ImQuotesRight
                    className={s.quotesRight}/></p>
            {/*<p className={s.comment}>Покупець не залишив відгук</p> to gdy 1-3 revievs, ale na feedMP nie zostawiono opinii*/}
        </div>
    )
}
export default FeedMpPart;
