import s from "./StatisticSelectMarketplace.module.scss";
import Select from "react-select";
import useFetch from "../../../../../functions/useFetch.js";


const StatisticSelectMarketplace = ({...props}) => {
    const {data, loading} = useFetch('stores', {
        default: [],

    });
    const dataToSelect = data.map(obj => {
        return {value: obj.id, label: obj.name}
    })
    return (
        <div className={s.statisticSelectMarketplaceContainer}>
            <span>Select marketplace:</span><Select options={dataToSelect}/>
        </div>
    )
}
export default StatisticSelectMarketplace;
