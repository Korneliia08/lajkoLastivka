import s from "./LeftNavTopPanel.module.scss";
import InputWithIcon from "../../../ui/form/inputWithIcon/InputWithIcon.jsx";
import {RiArrowGoBackFill} from "react-icons/ri";


const LeftNavTopPanel = ({...props}) => {
    return (
        <div className={s.leftNavTopPanelContainer}>

            <h1>ЛайкоЛастівка</h1>
            <button className={s.logOut}><RiArrowGoBackFill/></button>
            <InputWithIcon/>

        </div>
    )
}
export default LeftNavTopPanel;
