import style from "./TopBelt.module.scss";
import lastivkaWithHeart from "./../../../assets/images/lastivkaWithHeart.png";
import {IoIosLogOut} from "react-icons/io";
import {useNavigate} from "react-router-dom";

function topBelt() {
    const navigate = useNavigate();

    function logOutFun() {
        navigate("/");
    }

    return (
        <div className={style.container}>
            <div className={style.blockForLogoAndTitle}>
                <img src={lastivkaWithHeart} alt="lastivkaWithHeartLeft" className={style.lastivkaWithHeartLeft}/>
                <span className={style.title}>"Лайколастівка"</span>
                <img src={lastivkaWithHeart} alt="lastivkaWithHeartRight" className={style.lastivkaWithHeartRight}/>
            </div>
            <IoIosLogOut className={style.iconLogOut} onClick={logOutFun}/>
        </div>
    )
}

export default topBelt;
