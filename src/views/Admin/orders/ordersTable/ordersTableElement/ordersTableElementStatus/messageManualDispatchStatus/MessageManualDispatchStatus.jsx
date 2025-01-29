import { FaHand } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";

const MessageManualDispatchStatus = ({ order, ...props }) => {
  let mess = order.messages[0];
  // if (mess.status == "canceled") {
  if (order.messages[order.messages.length - 1]) {
    mess = order.messages[order.messages.length - 1];
    if (mess.messageType == "manual") {
      return (
        <FaHand
          title={"Повідомлення було надіслано вручну"}
          color={"#008103"}
          key="K1"
        />
      );
    }
  } else {
    return <ImCancelCircle color={"#0026bc"} key="K2" />;
  }
  //}
};
export default MessageManualDispatchStatus;
