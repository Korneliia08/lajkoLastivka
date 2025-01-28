import s from "./LeftNavTopPanel.module.scss";
import { RiArrowGoBackFill } from "react-icons/ri";
import InputWithIcon from "@/components/ui/form/inputWithIcon/InputWithIcon.jsx";

const LeftNavTopPanel = ({ ...props }) => {
  return (
    <div className={s.leftNavTopPanelContainer}>
      <h1>ЛайкоЛастівка</h1>
      <button className={s.logOut}>
        <RiArrowGoBackFill />
      </button>
      <InputWithIcon disabled={true} />
    </div>
  );
};
export default LeftNavTopPanel;
