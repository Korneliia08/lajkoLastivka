import s from "./TrendIndicator.module.scss";
import {BsCaretUpFill} from "react-icons/bs";


const TrendIndicator = (props) => {
    return (
        <div className={s.trendIndicatorContainer}>
            <BsCaretUpFill/> +32.43%
        </div>
    )
}
export default TrendIndicator;
