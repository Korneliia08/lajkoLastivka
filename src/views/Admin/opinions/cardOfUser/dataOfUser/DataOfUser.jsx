import s from "./DataOfUser.module.scss";
import { MdOutlineLocalPhone } from "react-icons/md";
import { maxLenght } from "@/functions/maxLenght.js";

const DataOfUser = ({ data, ...props }) => {
  const numberOfPhone = data.order.recipient_phone;
  const user = data.order.recipient_full_name;
  return (
    <div className={s.dataOfUserContainer}>
      <span title={user} className={s.user}>
        {maxLenght(user, 24)}
      </span>
      <div className={s.numberOfPhone}>
        <MdOutlineLocalPhone className={s.phoneIcon} />
        <span className={s.number}>+{numberOfPhone}</span>
      </div>
    </div>
  );
};
export default DataOfUser;
