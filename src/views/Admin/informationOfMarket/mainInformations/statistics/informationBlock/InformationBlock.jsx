import s from "./InformationBlock.module.scss";


const InformationBlock = ({title = "Total paid", value = "value", ...props}) => {
    return (
        <div className={s.blockOfStatistic}>
            <h3 className={s.title}>{title}</h3>
            <span className={s.content}>{value}</span>
        </div>
    )
}
export default InformationBlock;
