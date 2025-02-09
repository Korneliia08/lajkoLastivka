import s from "./OrdersTableElement.module.scss";
import df from "../../../../../functions/dateFormat.js";
import { useDispatch, useSelector } from "react-redux";
import { addOrderToSelected, removeSelectedOrder } from "../../ordersSlice.js";
import RozetkaStatusConverter from "../../../../../components/rozetkaStatusConverter/RozetkaStatusConverter.jsx";
import OrdersTableElementStatus from "@/views/Admin/orders/ordersTable/ordersTableElement/ordersTableElementStatus/OrdersTableElementStatus.jsx";

const OrdersTableElement = ({ order, index, ...props }) => {
  const dispatch = useDispatch();

  const isChecked =
    useSelector((state) => state.orders.selectedOrders).find(
      (obj) => obj.id === order.id,
    ) !== undefined;
  return (
    <tr className={s.ordersTableElementContainer}>
      <td>
        <input
          type={"checkbox"}
          onChange={(event) => {
            if (event.target.checked) {
              dispatch(addOrderToSelected(order));
            } else {
              dispatch(removeSelectedOrder(order.id));
            }
          }}
          checked={isChecked}
        />
      </td>
      <td>{index}</td>
      <td>{order.orderId}</td>
      <td>{df(order.orderCreateTime, "DD.MM.YYYY HH:mm")}</td>
      <td>
        <RozetkaStatusConverter>{order.status}</RozetkaStatusConverter>
      </td>

      <td>{df(order.updateTime, "DD.MM.YYYY HH:mm")}</td>
      <td>
        {order.messages.length > 0
          ? df(
              order.messages[order.messages.length - 1].scheduledTime,
              "DD.MM.YYYY HH:mm",
            )
          : ""}
      </td>
      <td className={s.smallText}>
        {order.items.map((item) => (
          <span>{item.title},</span>
        ))}
      </td>

      <td className={s.icons}>
        <span>
          <OrdersTableElementStatus order={order} />
        </span>
      </td>
    </tr>
  );
};
export default OrdersTableElement;
