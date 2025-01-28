import s from "./DataAccountToShops.module.scss";
import MainBtn from "@/components/ui/mainBtn/MainBtn.jsx";


const DataAccountToShops = ({...props}) => {
    return (
        <div className={s.dataAccountToShopsContainer}>
            <div className={s.left}>
                <h5>З’єднання з маркетплейсом активне</h5>
                <p>Ваш маркетплейс успішно підключено, і з’єднання активне. Тепер ви можете повноцінно використовувати
                    всі можливості адміністративної панелі.</p>
            </div>
            <MainBtn buttonText={"Підключити"}/>
        </div>
    )
}
export default DataAccountToShops;
