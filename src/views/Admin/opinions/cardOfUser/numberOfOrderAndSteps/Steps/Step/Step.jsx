import s from "./Step.module.scss";
import cn from "@/functions/cn.js";

const Step = ({ disable, icon, ...props }) => {
  return (
    <div className={cn(s.mainContainer, disable && s.disabled)}>
      <div className={s.etapContainer}>{icon}</div>
      <div className={s.afterDiv}></div>
    </div>
  );
};
export default Step;
