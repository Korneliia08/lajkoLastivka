import s from "./SecondPart.module.scss";
import SetDispatchTime
    from "@/views/Admin/Marketplace/addAndEditMarketPlace/templateOfMessages/setDispatchTime/SetDispatchTime.jsx";


const SecondPart = ({...props}) => {
    return (
        <div className={s.secondPartContainer}>
            <div className={s.left}>
                <div className={s.blockForTitle}>
                    <h5 className={s.title}>Шаблон повідомлення</h5>
                    <h6 className={s.describe}>sssssssssssssss</h6>
                </div>
                <textarea className={s.textAreaField}></textarea>
            </div>
            <div className={s.right}>
                <SetDispatchTime/>
            </div>
        </div>
    )
}
export default SecondPart;
