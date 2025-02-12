import s from "./Etap.module.scss";


const Etap = ({icon, ...props}) => {
    return (
        <div className={s.etapContainer}>
            {icon}
        </div>
    )
}
export default Etap;
