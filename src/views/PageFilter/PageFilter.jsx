import style from "./PageFilter.module.scss"
import {CiStar} from "react-icons/ci";
import bershkaImg from "./../../assets/images/Bershka.jpg";
import StarsRating from "../../components/ui/starsRating/StarsRating.jsx";

function PageFilter() {
    return (
        <div className={style.container}>
            <header className={style.blockForHeader}>
                <img src={bershkaImg} alt="bershkaImg" className={style.imgOfShop}/>
                <div className={style.circleForLogo}></div>
            </header>
            <p className={style.titleOfShop}>Магазин - Бершка</p>
            <p className={style.question}>Як Вам наш сервіс: вау чи «ну так собі»?" "🤔</p>
            <div className={style.blockForStars}>
              <StarsRating onChange={($event)=>console.log($event)}/>
            </div>
            <div className={style.blockForBtns}>
                <button className={style.deleteBtn}>Скасувати</button>
                <button className={style.continueBtn}>Продовжити</button>
            </div>
        </div>
    )
}

export default PageFilter;
