import s from "./RozetkaPart.module.scss";
import {ImQuotesRight} from "react-icons/im";


const RozetkaPart = ({...props}) => {
    return (
        <div className={s.rozetkaPartContainer}>
            <h4 className={s.title}>Розетка</h4>
            <p className={s.comment}><ImQuotesRight className={s.quotesLeft}/>Смарт-годинник чудовий! Стильний дизайн,
                довго тримає заряд і працює без збоїв. Рекомендую!<ImQuotesRight
                    className={s.quotesRight}/></p>
            {/*<p className={s.comment}>Покупець не залишив відгук</p> to gdy 4-5 revievs, ale na rozetce nie zostawiono opinii*/}
        </div>
    )
}
export default RozetkaPart;
