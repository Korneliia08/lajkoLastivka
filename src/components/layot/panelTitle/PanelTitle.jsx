import s from "./PanelTitle.module.scss";


const PanelTitle = ({title, subTitle, ...props}) => {
    return (
        <div className={s.panelTitleContainer}>
            <h3 className={s.title}>{title}</h3>
            <h4 className={s.subTitle}>{subTitle}</h4>
        </div>
    )
}
export default PanelTitle;
