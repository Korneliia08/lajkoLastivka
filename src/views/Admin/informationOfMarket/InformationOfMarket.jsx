import s from "./InformationOfMarket.module.scss";
import MainInformations from "./mainInformations/MainInformations.jsx";
import StatisticInformations from "./statisticInformations/StatisticInformations.jsx";
import OrderInformations from "./orderInformations/OrderInformations.jsx";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import useFetch from "@hooks/useFetch.js";
import {Breadcrumbs, Typography} from "@mui/material";
import {FiEdit3} from "react-icons/fi";
import MainBtn from "@/components/ui/mainBtn/MainBtn.jsx";


const InformationOfMarket = ({...props}) => {
    const navigate = useNavigate();
    const {id} = useParams()
    const {data: store, loading} = useFetch(`stores/${id}`)
    if (loading) return 'loading....';

    return (
        <OutletPanelScroll>
            <div className={s.informationOfMarketContainer}>
                <div className={s.topContainer}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <NavLink className={'breadcrumbsLink'} underline="hover" color="inherit"
                                 to="/admin/marketplaces">
                            Marketplaces
                        </NavLink>
                        <Typography
                            underline="hover"
                            color="inherit"

                        >
                            {store.name}
                        </Typography>
                    </Breadcrumbs>
                    <MainBtn buttonText={"Редагувати"} buttonIcon={<FiEdit3/>}
                             onClick={() => navigate("/admin/marketplaces/edit/" + id)}/>
                </div>
                <MainInformations store={store}/>
                <StatisticInformations store={store}/>
                <OrderInformations store={store}/>
            </div>
        </OutletPanelScroll>
    )
}
export default InformationOfMarket;
