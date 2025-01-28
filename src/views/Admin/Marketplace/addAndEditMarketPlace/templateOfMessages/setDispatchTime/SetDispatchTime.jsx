import s from "./SetDispatchTime.module.scss";
import RowOfFormAddAndEditShop from "@/components/ui/rowOfFormAddAndEditShop/RowOfFormAddAndEditShop.jsx";

const SetDispatchTime = ({...props}) => {
    return (
        <div className={s.setDispatchTimeContainer}>
            <div className={s.blockForTitle}>
                <h5 className={s.title}>Налаштування часу</h5>
                <h6 className={s.describe}>Вкажіть час, коли надсилати повідомлення клієнтам.</h6>
            </div>
            <div className={s.container}>
                <RowOfFormAddAndEditShop title={"Від:"} describe={"Формат: 18:00 (години:хвилини)"}/>
                <RowOfFormAddAndEditShop title={"До:"} describe={"Формат: 20:00 (години:хвилини)"}/>
                <RowOfFormAddAndEditShop title={"Затримка"}
                                         describe={"Вкажіть час у годинах для затримки перед надсиланням повідомлення"}/>
            </div>
        </div>
    );
};
export default SetDispatchTime;
