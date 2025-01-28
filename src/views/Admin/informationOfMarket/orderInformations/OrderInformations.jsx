import s from "./OrderInformations.module.scss";
import OrdersTableTopPanel from "../../orders/ordersTable/ordersTableTopPanel/OrdersTableTopPanel.jsx";
import OrdersTable from "../../orders/ordersTable/OrdersTable.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ordersTableReset } from "@/views/Admin/orders/ordersSlice.js";

const OrderInformations = ({ ...props }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ordersTableReset());
  }, [id]);
  return (
    <div className={s.orderInformationsContainer}>
      <OrdersTableTopPanel />
      <div className={s.ordersList}>
        <OrdersTable store={id} />
      </div>
    </div>
  );
};
export default OrderInformations;
