import s from "./OrdersTableTopPanel.module.scss";
import OrdersTableTopPanelSearchInput from "./ordersTableTopPanelSearchInput/OrdersTableTopPanelSearchInput.jsx";
import OrdersTableTopPanelDatesRange from "./ordersTableTopPanelDatesRange/OrdersTableTopPanelDatesRange.jsx";
import { useModalManager } from "../../../../../hooks/modalManager.js";
import MyModal from "../../../../../components/features/myModal/MyModal.jsx";
import ManualMessageDispatch from "./manualMessageDispatch/ManualMessageDispatch.jsx";
import { useSelector } from "react-redux";

const OrdersTableTopPanel = ({ storeData, ...props }) => {
  const selectedOrders = useSelector((state) => state.orders.selectedOrders);
  const { controller, toggleModal } = useModalManager();

  return (
    <>
      <div className={s.ordersTableTopPanelContainer}>
        <div className={s.title}>
          <h3>Замовлення:</h3>
          <p>Усі замовлення магазину</p>
        </div>
        <div className={s.controls}>
          <OrdersTableTopPanelSearchInput />
          <OrdersTableTopPanelDatesRange />
          <button
            className={s.sendFast}
            disabled={selectedOrders.length === 0}
            onClick={() => toggleModal("ManualMessageDispatch")}
          >
            Надіслати зараз
          </button>
        </div>
      </div>
      <MyModal
        options={{}}
        name={"ManualMessageDispatch"}
        controller={controller}
      >
        <ManualMessageDispatch storeData={storeData} controller={controller} />
      </MyModal>
    </>
  );
};
export default OrdersTableTopPanel;
