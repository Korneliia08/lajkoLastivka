import s from "./DataAccountToShopsModal.module.scss";
import { FaX } from "react-icons/fa6";

const DataAccountToShopsModal = ({ controller, ...props }) => {
  function connect() {
    controller.closeModal();
  }

  return (
    <div className={s.dataAccountToShopsModalContainer}>
      <h2>TITLE</h2>
      <FaX onClick={controller.closeModal}></FaX>

      <button onClick={controller.closeModal}>Anuluj</button>
      <button onClick={connect}>Podłącz</button>
    </div>
  );
};
export default DataAccountToShopsModal;
