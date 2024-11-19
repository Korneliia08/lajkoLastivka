import style from "../../PageFilter.module.scss";
import StarsRating from "../../../../components/ui/starsRating/StarsRating.jsx";


const PageFilterChooseStars = ({setStars, stars, sendStars}) => {
    return (<>

            <p className={style.question}>Як Вам наш сервіс: вау чи «ну так собі»?🤔</p>
            <div className={style.blockForStars}>
                <StarsRating onChange={(stars) => setStars(stars)}/>
            </div>
            <div className={style.blockForBtns}>
                <button className={style.deleteBtn}>Скасувати</button>
                <button className={style.continueBtn} disabled={stars == 0} onClick={sendStars}>Продовжити</button>
            </div>
        </>
    )
}
export default PageFilterChooseStars;
