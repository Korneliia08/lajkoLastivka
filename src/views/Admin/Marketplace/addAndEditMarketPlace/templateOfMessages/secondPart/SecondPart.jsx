import s from "./SecondPart.module.scss";
import SetDispatchTime from "@/views/Admin/Marketplace/addAndEditMarketPlace/templateOfMessages/setDispatchTime/SetDispatchTime.jsx";
import { useDispatch, useSelector } from "react-redux";
import { marketplaceSetField } from "@/views/Admin/Marketplace/addAndEditMarketPlace/marketplaceFormSlice.js";

const SecondPart = ({ ...props }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(marketplaceSetField({ field: name, value }));
  };

  const { messageTemplateViber } = useSelector(
    (state) => state.marketplaceForm,
  );

  return (
    <div className={s.secondPartContainer}>
      <div className={s.left}>
        <div className={s.blockForTitle}>
          <h5 className={s.title}>Шаблон повідомлення</h5>
          <h6 className={s.describe}>
            Напишіть шаблон повідомлення для автоматичного надсилання прохань до
            клієнтів
          </h6>
        </div>
        <textarea
          value={messageTemplateViber}
          name={"messageTemplateViber"}
          onChange={handleChange}
          className={s.textAreaField}
        ></textarea>
      </div>
      <div className={s.right}>
        <SetDispatchTime />
      </div>
    </div>
  );
};
export default SecondPart;
