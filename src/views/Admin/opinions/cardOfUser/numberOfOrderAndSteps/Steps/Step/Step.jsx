import s from "./Step.module.scss";
import cn from "@/functions/cn.js";

const Step = ({ disable, icon, ...props }) => {
  return (
    <div className={cn(s.etapContainer, disable && s.disable)}>{icon}</div>
  );
};
export default Step;
