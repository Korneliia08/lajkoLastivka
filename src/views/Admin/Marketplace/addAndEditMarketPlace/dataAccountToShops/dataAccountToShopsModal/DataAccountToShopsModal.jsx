import s from "./DataAccountToShopsModal.module.scss";
import {FaX} from "react-icons/fa6";
import RowOfFormAddAndEditShop from "@/components/ui/rowOfFormAddAndEditShop/RowOfFormAddAndEditShop.jsx";

const DataAccountToShopsModal = ({controller, ...props}) => {
    function connect() {
        controller.closeModal();
    }

    return (
        <div className={s.dataAccountToShopsModalContainer}>
            <h2>TITLE</h2>
            <FaX onClick={controller.closeModal}></FaX>
            <RowOfFormAddAndEditShop title={"Логін"} describe={"Введіть логін до кабінету магазину"}/>
            <RowOfFormAddAndEditShop title={"Пароль"} describe={"Введіть пароль до кабінету магазину"}/>
            <button onClick={controller.closeModal}>Anuluj</button>
            <button onClick={connect}>Podłącz</button>
        </div>
    );
};
export default DataAccountToShopsModal;
