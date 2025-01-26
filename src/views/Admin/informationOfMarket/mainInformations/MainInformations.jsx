import s from "./MainInformations.module.scss";
import TitleOfShop from "./titleOfShop/TitleOfShop.jsx";
import Statistics from "./statistics/Statistics.jsx";
import {FaChartPie, FaLink} from "react-icons/fa";
import {MdDeleteOutline} from "react-icons/md";
import cn from "../../../../functions/cn.js";
import {confirmAlert} from "react-confirm-alert";
import api from "../../../../providers/interceptors/refreshToken.interceptor.js";
import {NavLink, useNavigate, useParams} from "react-router-dom";


const MainInformations = ({...props}) => {
    const {id} = useParams()
    const navigate = useNavigate()

    async function deleteMarketplace() {
        try {
            confirmAlert({
                title: 'Видалення магазину',
                //todo tu dorobić nazwę
                // message: 'Ви напевно хочете видалити магазин: ' + data.name,

                buttons: [
                    {
                        label: 'Так',
                        onClick: async () => {
                            await api.delete(`stores/${id}`);
                            navigate('./admin/marketplaces')
                        }
                    },
                    {
                        label: 'Ні',
                        onClick: () => {
                        }
                    }
                ]
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={s.mainInformationsContainer}>
            <div className={s.leftBlock}>
                <TitleOfShop/>
                <Statistics/>
            </div>
            <aside>
                <NavLink to={'./admin/statistic/' + id} className={cn(s.block, s.blockForAfter)}>
                    <FaChartPie className={s.icStyle}/>
                    <span>Статистики</span>
                </NavLink>
                <a className={cn(s.block, s.blockForAfter)}>
                    <FaLink className={s.icStyle}/>
                    <span className={s.link}>https://rozetka.com.ua</span>
                </a>
                <button onClick={deleteMarketplace} className={s.block}>
                    <MdDeleteOutline className={s.icDelete}/>
                    <span className={s.deleteSpan}>Видалити магазин</span>
                </button>
            </aside>
        </div>
    )
}
export default MainInformations;
