import { FiMousePointer } from "react-icons/fi";
import df from "@/functions/dateFormat.js";

const MessageClickStatus = ({
  silverColor,
  colorNotExist,
  order,
  ...props
}) => {
  let mess = order.messages[order.messages.length - 1];

  if (mess) {
    if (mess.clickedAt !== null) {
      return (
        <FiMousePointer
          color={"green"}
          key="k11"
          title={df(mess.clickedAt, "DD.MM.YYYY HH:mm")}
        />
      );
    } else {
      return (
        <FiMousePointer
          title={"Посилання для написання відгуку не було відвідано"}
          key="K12"
          color={silverColor}
        />
      );
    }
  } else {
    return <FiMousePointer color={colorNotExist} key="k13" />;
  }
};
export default MessageClickStatus;
