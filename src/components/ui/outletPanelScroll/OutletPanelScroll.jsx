import s from "./OutletPanelScroll.module.scss";


const OutletPanelScroll = ({children}) => {
    return (
        <div className={s.outletPanelScrollContainer}>
            {children}
        </div>
    )
}
export default OutletPanelScroll;
