import s from "./Etap.module.scss";


const Etap = ({icon, ...props}) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.etapContainer}>
                {icon}
            </div>
            <div className={s.afterDiv}></div>
        </div>
    )
}
export default Etap;
