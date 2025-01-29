import s from "./DataAccountToShops.module.scss";
import MainBtn from "@/components/ui/mainBtn/MainBtn.jsx";
import MyModal from "@/components/features/myModal/MyModal.jsx";
import {useModalManager} from "@hooks/modalManager.js";
import DataAccountToShopsModal
    from "@/views/Admin/Marketplace/addAndEditMarketPlace/dataAccountToShops/dataAccountToShopsModal/DataAccountToShopsModal.jsx";
import {RiRadioButtonLine} from "react-icons/ri";
import { useSelector } from "react-redux";

const DataAccountToShops = ({store, ...props}) => {
    const {controller, openModal} = useModalManager();
    const { isConnect: isConnect } = useSelector(
        (state) => state.marketplaceForm,
    );

    return (
        <>
            <div className={s.dataAccountToShopsContainer}>
                <div className={s.left}>
                    {!isConnect ? (
                        <div className={s.block}>
                            <h5 className={s.titleNoActive}>З’єднання з маркетплейсом неактивне</h5>
                            <RiRadioButtonLine className={s.iconRed}/>
                        </div>
                    ) : (
                        <div className={s.block}>
                            <h5 className={s.titleActive}>З’єднання з маркетплейсом активне</h5>
                            <RiRadioButtonLine className={s.iconGreen}/>
                        </div>
                    )}
                    {!isConnect ? (
                        <p>
                            Ваш маркетплейс не підключено. Будь ласка, підключіть його, щоб мати можливість повноцінно
                            використовувати всі функції адміністративної панелі.
                        </p>
                    ) : (
                        <p>
                            Ваш маркетплейс успішно підключено, і з’єднання активне. Тепер ви
                            можете повноцінно використовувати всі можливості адміністративної
                            панелі.
                        </p>
                    )}
                </div>
                {!isConnect ? (
                    <MainBtn
                        onClick={() => openModal("setAccessToStore")}
                        buttonText={"Підключити"}
                    />
                ) : ''}
            </div>
            <MyModal options={{}} name={"setAccessToStore"} controller={controller}>
                <DataAccountToShopsModal controller={controller}/>
            </MyModal>
        </>
    );
};
export default DataAccountToShops;
