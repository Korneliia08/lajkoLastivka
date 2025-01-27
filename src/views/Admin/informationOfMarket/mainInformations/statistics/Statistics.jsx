import s from "./Statistics.module.scss";
import InformationBlock from "./informationBlock/InformationBlock.jsx";
import useFetch from "../../../../../functions/useFetch.js";


const Statistics = ({store, ...props}) => {
    const {data, loading} = useFetch(`/stores/informationPageStatistic/${store.id}`, {autoRefresh: 60000, default: undefined})
    if (!data) return '';
    return (
        <div className={s.statisticsContainer}>
            <InformationBlock value={data.totalEarn + '₴'} title={'earn money'}/>
            <InformationBlock value={data.totalOrders} title={'total orders'}/>
            <InformationBlock value={data.totalOpinions} title={'total opinions'}/>
            <InformationBlock value={data.averageRating} title={'avg rating'}/>
        </div>
    )
}
export default Statistics;
