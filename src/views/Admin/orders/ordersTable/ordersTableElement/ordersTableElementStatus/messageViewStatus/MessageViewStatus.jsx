import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import df from "@/functions/dateFormat.js";

const MessageViewStatus = ({ silverColor, colorNotExist, order, ...props }) => {
  let mess = order.messages[order.messages.length - 1];

  if (mess) {
    if (!mess.readAt) {
      return (
        <FaEyeSlash
          title={"Повідомлення не прочитано"}
          key="k8"
          color={silverColor}
        />
      );
    } else {
      return (
        <FaRegEye
          color={"green"}
          key="k9"
          title={df(mess.readAt, "DD.MM.YYYY HH:mm")}
        />
      );
    }
  } else {
    return <FaEyeSlash color={colorNotExist} key="k10" />;
  }
};
export default MessageViewStatus;
