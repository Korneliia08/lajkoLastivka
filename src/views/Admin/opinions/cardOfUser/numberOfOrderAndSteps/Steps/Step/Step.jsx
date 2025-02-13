import s from "./Step.module.scss";
import cn from "@/functions/cn.js";

const Step = ({ img, disable, icon, ...props }) => {
  return (
    <div className={cn(s.mainContainer, disable && s.disabled, img && s.image)}>
      <div className={s.etapContainer}>{icon}</div>
      <div className={s.afterDiv}></div>
    </div>
  );
};
export default Step;
