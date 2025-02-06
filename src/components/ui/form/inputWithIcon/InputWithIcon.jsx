import s from "./InputWithIcon.module.scss";
import {FaMagnifyingGlass} from "react-icons/fa6";

const InputWithIcon = ({onChange, disabled, ...props}) => {
    return (
        <div className={s.inputWithIconContainer}>
            <input
                disabled={disabled}
                onChange={onChange}
                className={s.input}
                placeholder={"Пошук"}
            />{" "}
            <FaMagnifyingGlass/>
        </div>
    );
};
export default InputWithIcon;
