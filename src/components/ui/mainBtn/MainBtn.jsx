import s from "./MainBtn.module.scss";


const MainBtn = ({buttonText, buttonIcon, onClick, widthBtn, ...props}) => {
    return (
        <button style={{width: widthBtn}} className={s.btnStyle} onClick={onClick}>{buttonIcon}{buttonText}</button>
    )
}
export default MainBtn;
