import s from "./MainBtn.module.scss";


const MainBtn = ({buttonText, buttonIcon, onClick, ...props}) => {
    return (
        <button className={s.btnStyle} onClick={onClick}>{buttonIcon}{buttonText}</button>
    )
}
export default MainBtn;
