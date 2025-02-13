import s from "./Step.module.scss";

const Step = ({ disable, icon, ...props }) => {
  return (
    <div className={s.mainContainer}>
      <div className={s.etapContainer}>{icon}</div>
      <div className={s.afterDiv}></div>
    </div>
  );
};
export default Step;
