import s from "./TopForFilters.module.scss";


const TopForFilters = ({...props}) => {
    return (
        <div className={s.topForFiltersContainer}>
            <div className={s.blockForContent}>
                <h5 className={s.titleUsers}>Користувачі</h5>
                <p className={s.contentUsers}>Усі користувачі,які оцінили замовлення</p>
            </div>
        </div>
    )
}
export default TopForFilters;
