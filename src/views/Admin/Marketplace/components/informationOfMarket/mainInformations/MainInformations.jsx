import s from "./MainInformations.module.scss";
import TitleOfShop from "./titleOfShop/TitleOfShop.jsx";
import Statistics from "./statistics/Statistics.jsx";
import {FaChartPie, FaLink} from "react-icons/fa";
import {MdDeleteOutline} from "react-icons/md";


const MainInformations = ({...props}) => {
    return (
        <div className={s.mainInformationsContainer}>
            <div className={s.leftBlock}>
                <TitleOfShop/>
                <Statistics/>
            </div>
            <aside>
                <div className={s.block}>
                    <FaChartPie className={s.icStyle}/>
                    <span>Статистики</span>
                </div>
                <div className={s.block}>
                    <FaLink className={s.icStyle}/>
                    <span className={s.link}>https://rozetka.com.ua</span>
                </div>
                <div className={s.block}>
                    <MdDeleteOutline className={s.icDelete}/>
                    <span className={s.deleteSpan}>Видалити магазин</span>
                </div>
            </aside>
        </div>
    )
}
export default MainInformations;
