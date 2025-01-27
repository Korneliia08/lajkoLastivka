import s from "./InformationOfMarket.module.scss";
import MainInformations from "./mainInformations/MainInformations.jsx";
import StatisticInformations from "./statisticInformations/StatisticInformations.jsx";
import OrderInformations from "./orderInformations/OrderInformations.jsx";
import {NavLink, useParams} from "react-router-dom";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import useFetch from "../../../functions/useFetch.js";


const InformationOfMarket = ({...props}) => {
    const {id} = useParams()
    const {data: store, loading} = useFetch(`stores/${id}`)
    if (loading) return 'loading....'
    return (
        <OutletPanelScroll>
            <div className={s.informationOfMarketContainer}>

                <NavLink to={'/admin/marketplaces/edit/' + id}>EDIT</NavLink>
                <MainInformations store={store}/>
                <StatisticInformations store={store}/>
                <OrderInformations store={store}/>
            </div>
        </OutletPanelScroll>
    )
}
export default InformationOfMarket;
