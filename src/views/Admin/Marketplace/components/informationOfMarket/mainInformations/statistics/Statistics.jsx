import s from "./Statistics.module.scss";
import InformationBlock from "./informationBlock/InformationBlock.jsx";


const Statistics = ({...props}) => {
    return (
        <div className={s.statisticsContainer}>
            <InformationBlock/>
            <InformationBlock/>
            <InformationBlock/>
            <InformationBlock/>
        </div>
    )
}
export default Statistics;
