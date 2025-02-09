import s from "./LeftNavTopPanel.module.scss";
import { RiArrowGoBackFill } from "react-icons/ri";
import InputWithIcon from "@/components/ui/form/inputWithIcon/InputWithIcon.jsx";
import { useNavigate } from "react-router-dom";

const LeftNavTopPanel = ({ ...props }) => {
  const navigate = useNavigate();
  return (
    <div className={s.leftNavTopPanelContainer}>
      <h1>FeedMP</h1>
      <button className={s.icon} onClick={() => navigate(-1)}>
        <RiArrowGoBackFill />
      </button>
      <InputWithIcon disabled={true} />
    </div>
  );
};
export default LeftNavTopPanel;
