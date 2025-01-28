import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const MessageViewStatus = ({ silverColor, colorNotExist, order, ...props }) => {
  let mess = order.messages[0];

  if (mess) {
    if (!mess.readAt) {
      //todo translate
      return (
        <FaEyeSlash
          title={"Wiadomość nie została odczytana"}
          key="k8"
          color={silverColor}
        />
      );
    } else {
      return <FaRegEye color={"green"} key="k9" title={mess.readAt} />;
    }
  } else {
    return <FaEyeSlash color={colorNotExist} key="k10" />;
  }
};
export default MessageViewStatus;
