import s from "./Statistics.module.scss";


const Statistics = ({...props}) => {
    return (
        <div className={s.statisticsContainer}>
            <div className={s.blockOfStatistic}>
                <h3 className={s.title}>Total Paid</h3>
                <span className={s.content}>info</span>
            </div>
            <div className={s.blockOfStatistic}>
                <h3 className={s.title}>Total Paid</h3>
                <span className={s.content}>info</span>
            </div>
            <div className={s.blockOfStatistic}>
                <h3 className={s.title}>Total Paid</h3>
                <span className={s.content}>info</span>
            </div>
            <div className={s.blockOfStatistic}>
                <h3 className={s.title}>Total Paid</h3>
                <span className={s.content}>info</span>
            </div>
        </div>
    )
}
export default Statistics;
