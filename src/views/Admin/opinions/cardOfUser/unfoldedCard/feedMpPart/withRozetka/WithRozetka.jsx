import s from "./WithRozetka.module.scss";
import {ImQuotesRight} from "react-icons/im";


const WithRozetka = ({...props}) => {
    return (
        <div className={s.withRozetkaContainer}>
            <div className={s.blockFeedMP}>
                <h4 className={s.title}>FeedMp</h4>
                <p className={s.comment}><ImQuotesRight className={s.quotesLeft}/>Годинник виглядає стильно, але батарея
                    швидко сідає, а повідомлення іноді приходять із затримкою.!<ImQuotesRight
                        className={s.quotesRight}/></p>
                {/*<p className={s.comment}>Покупець не залишив відгук</p> to gdy 1-3 revievs, ale na feedMP i  rozetce  nie zostawiono opinii*/}
                {/*<p className={s.comment}>Покупець не залишив відгук на feedMP, але залишив все таки на розетці</p> to gdy 1-3 revievs, ale na feedMP nie zostawiono opinii,ale na rozetce juz zostawione*/}
            </div>
            <div className={s.blockRozetka}>
                <h4 className={s.title}>Розетка</h4>
                <p className={s.comment}><ImQuotesRight className={s.quotesLeft}/>Годинник виглядає стильно, але батарея
                    швидко сідає, а повідомлення іноді приходять із затримкою.!<ImQuotesRight
                        className={s.quotesRight}/></p>
            </div>
        </div>
    )
}
export default WithRozetka;
