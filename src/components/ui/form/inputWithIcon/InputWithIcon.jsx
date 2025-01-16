import s from "./InputWithIcon.module.scss";
import {FaMagnifyingGlass} from "react-icons/fa6";


const InputWithIcon = ({...props}) => {
    return (
        <div className={s.inputWithIconContainer}>
            <input className={s.input} placeholder={'Search'}/> <FaMagnifyingGlass/>
        </div>
    )
}
export default InputWithIcon;
