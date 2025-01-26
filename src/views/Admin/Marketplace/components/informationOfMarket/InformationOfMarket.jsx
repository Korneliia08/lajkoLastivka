import s from "./InformationOfMarket.module.scss";
import MainInformations from "./mainInformations/MainInformations.jsx";
import StatisticInformations from "./statisticInformations/StatisticInformations.jsx";
import OrderInformations from "./orderInformations/OrderInformations.jsx";


const InformationOfMarket = ({...props}) => {
    return (
        <div className={s.informationOfMarketContainer}>
            <MainInformations/>
            <StatisticInformations/>
            <OrderInformations/>
        </div>
    )
}
export default InformationOfMarket;
