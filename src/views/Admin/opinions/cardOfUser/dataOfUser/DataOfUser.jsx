import s from "./DataOfUser.module.scss";
import { MdOutlineLocalPhone } from "react-icons/md";

const DataOfUser = ({ data, ...props }) => {
  const numberOfPhone = data.order.recipient_phone;
  const user = data.order.recipient_full_name;
  return (
    <div className={s.dataOfUserContainer}>
      <span className={s.user}>{user}</span>
      <div className={s.numberOfPhone}>
        <MdOutlineLocalPhone className={s.phoneIcon} />
        <span className={s.number}>+{numberOfPhone}</span>
      </div>
    </div>
  );
};
export default DataOfUser;
