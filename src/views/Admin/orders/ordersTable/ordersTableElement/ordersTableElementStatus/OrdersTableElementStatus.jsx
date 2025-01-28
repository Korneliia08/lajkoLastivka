import MessageManualDispatchStatus from "@/views/Admin/orders/ordersTable/ordersTableElement/ordersTableElementStatus/messageManualDispatchStatus/MessageManualDispatchStatus.jsx";
import MessageSendStatus from "@/views/Admin/orders/ordersTable/ordersTableElement/ordersTableElementStatus/messageSendStatus/MessageSendStatus.jsx";
import MessageViewStatus from "@/views/Admin/orders/ordersTable/ordersTableElement/ordersTableElementStatus/messageViewStatus/MessageViewStatus.jsx";
import MessageClickStatus from "@/views/Admin/orders/ordersTable/ordersTableElement/ordersTableElementStatus/messageClickStatus/MessageClickStatus.jsx";
import OrderReviewStatus from "@/views/Admin/orders/ordersTable/ordersTableElement/ordersTableElementStatus/orderReviewStatus/OrderReviewStatus.jsx";

const OrdersTableElementStatus = ({ order, ...props }) => {
  if (!order.messages[0]) {
    return "----";
  }
  const colorNotExist = "rgba(104,104,104,0.16)";
  const silverColor = "rgba(99,99,99,0.52)";

  return (
    <>
      <MessageManualDispatchStatus order={order} />
      <MessageSendStatus
        silverColor={silverColor}
        colorNotExist={colorNotExist}
        order={order}
      />
      <MessageViewStatus
        silverColor={silverColor}
        colorNotExist={colorNotExist}
        order={order}
      />
      <MessageClickStatus
        silverColor={silverColor}
        colorNotExist={colorNotExist}
        order={order}
      />
      <OrderReviewStatus
        silverColor={silverColor}
        colorNotExist={colorNotExist}
        order={order}
      />
    </>
  );
};
export default OrdersTableElementStatus;
