import s from "./SetDispatchTime.module.scss";
import RowOfFormAddAndEditShop from "@/components/ui/rowOfFormAddAndEditShop/RowOfFormAddAndEditShop.jsx";

const SetDispatchTime = ({ ...props }) => {
  return (
    <div className={s.setDispatchTimeContainer}>
      <div className={s.blockForTitle}>
        <h5 className={s.title}>Шаблон повідомлення</h5>
        <h6 className={s.describe}>fffffffff</h6>
      </div>
      <div className={s.container}>
        <RowOfFormAddAndEditShop title={"test"} describe={"test2"} />
        <RowOfFormAddAndEditShop title={"test"} describe={"test2"} />
        <RowOfFormAddAndEditShop title={"test"} describe={"test2"} />
      </div>
    </div>
  );
};
export default SetDispatchTime;
