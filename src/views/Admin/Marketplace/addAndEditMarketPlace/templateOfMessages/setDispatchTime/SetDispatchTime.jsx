import s from "./SetDispatchTime.module.scss";
import RowOfFormAddAndEditShop from "@/components/ui/rowOfFormAddAndEditShop/RowOfFormAddAndEditShop.jsx";
import { marketplaceSetField } from "@/views/Admin/Marketplace/addAndEditMarketPlace/marketplaceFormSlice.js";
import { useDispatch, useSelector } from "react-redux";

const SetDispatchTime = ({ ...props }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch(marketplaceSetField({ field: name, value }));
  };

  const { sendingDelay, isAutoSendEnable, sendingStartTime, sendingEndTime } =
    useSelector((state) => state.marketplaceForm);
  console.log(isAutoSendEnable);
  return (
    <div className={s.setDispatchTimeContainer}>
      <div className={s.blockForTitle}>
        <h5 className={s.title}>Налаштування часу</h5>
        <h6 className={s.describe}>
          Вкажіть час, коли надсилати повідомлення клієнтам.
        </h6>
      </div>
      <div className={s.container}>
        <RowOfFormAddAndEditShop
          name={"isAutoSendEnable"}
          value={isAutoSendEnable}
          onChange={handleChange}
          type={"toggle"}
          title={"Автоматична розсилка"}
          describe={"Увімкніть або вимкніть автоматичне надсилання"}
        />
        <RowOfFormAddAndEditShop
          name={"sendingStartTime"}
          value={sendingStartTime}
          onChange={handleChange}
          title={"Від:"}
          describe={"Формат: 18:00 (години:хвилини)"}
        />
        <RowOfFormAddAndEditShop
          name={"sendingEndTime"}
          value={sendingEndTime}
          onChange={handleChange}
          title={"До:"}
          describe={"Формат: 20:00 (години:хвилини)"}
        />
        <RowOfFormAddAndEditShop
          title={"Затримка"}
          name={"sendingDelay"}
          value={sendingDelay}
          onChange={handleChange}
          describe={
            "Вкажіть час у годинах для затримки перед надсиланням повідомлення"
          }
        />
      </div>
    </div>
  );
};
export default SetDispatchTime;
