import s from "./Statistics.module.scss";
import InformationBlock from "./informationBlock/InformationBlock.jsx";
import useFetch from "@hooks/useFetch.js";

const Statistics = ({store, ...props}) => {
    const {data, loading} = useFetch(
        `/stores/informationPageStatistic/${store.id}`,
        {
            autoRefresh: 60000,
            default: undefined,
        },
    );
    if (!data) return "";
    return (
        <div className={s.statisticsContainer}>
            <InformationBlock
                value={Math.round(data.totalEarn) + "₴"}
                title={"прибуток"}
            />
            <InformationBlock value={data.totalOrders} title={"усього замовлень"}/>
            <InformationBlock value={data.totalOpinions} title={"усього відгуків"}/>
            <InformationBlock
                value={Math.round(data.averageRating * 100) / 100}
                title={"серед. оц. на Розетці"}
            />
            <InformationBlock
                value={Math.round(data.averageLocalRating * 100) / 100}
                title={"серед. оц. у FeedMP"}
            />
        </div>
    );
};
export default Statistics;
