import s from "./MainInformations.module.scss";
import TitleOfShop from "./titleOfShop/TitleOfShop.jsx";
import Statistics from "./statistics/Statistics.jsx";
import cn from "../../../../functions/cn.js";
import {confirmAlert} from "react-confirm-alert";
import api from "../../../../providers/interceptors/refreshToken.interceptor.js";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {maxLenght} from "@/functions/maxLenght.js";
import {IoIosLink} from "react-icons/io";
import {IoPieChartOutline} from "react-icons/io5";
import {AiOutlineDelete} from "react-icons/ai";

const MainInformations = ({store, ...props}) => {
    const {id} = useParams();
    const navigate = useNavigate();

    async function deleteMarketplace() {
        try {
            confirmAlert({
                title: "Видалення магазину",
                message: 'Ви напевно хочете видалити магазин? ',

                buttons: [
                    {
                        label: "Так",
                        onClick: async () => {
                            await api.delete(`stores/${id}`);
                            navigate("./admin/marketplaces");
                        },
                    },
                    {
                        label: "Ні",
                        onClick: () => {
                        },
                    },
                ],
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={s.mainInformationsContainer}>
            <div className={s.leftBlock}>
                <TitleOfShop store={store}/>
                <Statistics store={store}/>
            </div>
            <aside>
                <NavLink
                    to={"/admin/statistics/" + id}
                    className={cn(s.block, s.blockForAfter)}
                >
                    <IoPieChartOutline className={s.icStyle}/>
                    <span>Статистики</span>
                </NavLink>
                <a className={cn(s.block, s.blockForAfter)}>
                    <IoIosLink className={s.icStyle}/>
                    <a
                        href={store.link}
                        title={store.link}
                        target={"_blank"}
                        className={s.link}
                    >
                        {maxLenght(store.link, 19, "")}
                    </a>
                </a>
                <button onClick={deleteMarketplace} className={s.block}>
                    <AiOutlineDelete className={s.icDelete}/>
                    <span className={s.deleteSpan}>Видалити магазин</span>
                </button>
            </aside>
            <span className={s.infoBlock}>Дані, зібрані з моменту підключення магазину до адміністративної панелі</span>
        </div>
    );
};
export default MainInformations;
