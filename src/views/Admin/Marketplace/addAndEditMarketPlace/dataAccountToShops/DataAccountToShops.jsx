import s from "./DataAccountToShops.module.scss";
import MainBtn from "@/components/ui/mainBtn/MainBtn.jsx";
import MyModal from "@/components/features/myModal/MyModal.jsx";
import { useModalManager } from "@hooks/modalManager.js";
import DataAccountToShopsModal from "@/views/Admin/Marketplace/addAndEditMarketPlace/dataAccountToShops/dataAccountToShopsModal/DataAccountToShopsModal.jsx";

const DataAccountToShops = ({ ...props }) => {
  const { controller, openModal } = useModalManager();
  return (
    <>
      <div className={s.dataAccountToShopsContainer}>
        <div className={s.left}>
          <h5>З’єднання з маркетплейсом активне</h5>
          <p>
            Ваш маркетплейс успішно підключено, і з’єднання активне. Тепер ви
            можете повноцінно використовувати всі можливості адміністративної
            панелі.
          </p>
        </div>
        <MainBtn
          onClick={() => openModal("setAccessToStore")}
          buttonText={"Підключити"}
        />
      </div>
      <MyModal options={{}} name={"setAccessToStore"} controller={controller}>
        <DataAccountToShopsModal controller={controller} />
      </MyModal>
    </>
  );
};
export default DataAccountToShops;
