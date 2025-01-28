import s from "./InputWithIcon.module.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";

const InputWithIcon = ({ disabled, ...props }) => {
  return (
    <div className={s.inputWithIconContainer}>
      <input disabled={disabled} className={s.input} placeholder={"Search"} />{" "}
      <FaMagnifyingGlass />
    </div>
  );
};
export default InputWithIcon;
