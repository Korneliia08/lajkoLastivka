import s from "./InformationOfMarket.module.scss";
import MainInformations from "./mainInformations/MainInformations.jsx";
import StatisticInformations from "./statisticInformations/StatisticInformations.jsx";
import OrderInformations from "./orderInformations/OrderInformations.jsx";
import {NavLink, useParams} from "react-router-dom";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import useFetch from "@hooks/useFetch.js";
import {Breadcrumbs, Typography} from "@mui/material";


const InformationOfMarket = ({...props}) => {
    const {id} = useParams()
    const {data: store, loading} = useFetch(`stores/${id}`)
    if (loading) return 'loading....'
    return (
        <OutletPanelScroll>
            <div className={s.informationOfMarketContainer}>
                <div className={s.topContainer}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <NavLink className={'breadcrumbsLink'} underline="hover" color="inherit" to="/admin/marketplaces">
                            Marketplaces
                        </NavLink>
                        <Typography
                            underline="hover"
                            color="inherit"

                        >
                            {store.name}
                        </Typography>

                    </Breadcrumbs>
                    <NavLink to={'/admin/marketplaces/edit/' + id}>EDIT</NavLink>
                </div>

                <MainInformations store={store}/>
                <StatisticInformations store={store}/>
                <OrderInformations store={store}/>
            </div>
        </OutletPanelScroll>
    )
}
export default InformationOfMarket;
