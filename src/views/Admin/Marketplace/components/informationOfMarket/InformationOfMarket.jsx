import s from "./InformationOfMarket.module.scss";
import MainInformations from "./mainInformations/MainInformations.jsx";
import StatisticInformations from "./statisticInformations/StatisticInformations.jsx";
import OrderInformations from "./orderInformations/OrderInformations.jsx";
import {NavLink, useParams} from "react-router-dom";


const InformationOfMarket = ({...props}) => {
    const {id} = useParams()
    return (
        <div className={s.informationOfMarketContainer}>
            <NavLink to={'/admin/marketplaces/edit/' + id}>EDIT</NavLink>
            <MainInformations/>
            <StatisticInformations/>
            <OrderInformations/>
        </div>
    )
}
export default InformationOfMarket;
