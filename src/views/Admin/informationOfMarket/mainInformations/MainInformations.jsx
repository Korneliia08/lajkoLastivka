import s from "./MainInformations.module.scss";
import TitleOfShop from "./titleOfShop/TitleOfShop.jsx";
import Statistics from "./statistics/Statistics.jsx";
import {FaChartPie, FaLink} from "react-icons/fa";
import {MdDeleteOutline} from "react-icons/md";
import cn from "../../../../functions/cn.js";


const MainInformations = ({...props}) => {
    return (
        <div className={s.mainInformationsContainer}>
            <div className={s.leftBlock}>
                <TitleOfShop/>
                <Statistics/>
            </div>
            <aside>
                <div className={cn(s.block, s.blockForAfter)}>
                    <FaChartPie className={s.icStyle}/>
                    <span>Статистики</span>
                </div>
                <div className={cn(s.block, s.blockForAfter)}>
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
