import s from "./PanelTitle.module.scss";


const PanelTitle = ({title, subTitle, buttonText, onClick, ...props}) => {
    return (
        <div className={s.panelTitleContainer}>
            <div className={s.blockForTitle}>
                <h3 className={s.title}>{title}</h3>
                <h4 className={s.subTitle}>{subTitle}</h4>
            </div>
            {buttonText && <button className={s.btnStyle} onClick={onClick}>{buttonText}</button>}
        </div>
    )
}
export default PanelTitle;
