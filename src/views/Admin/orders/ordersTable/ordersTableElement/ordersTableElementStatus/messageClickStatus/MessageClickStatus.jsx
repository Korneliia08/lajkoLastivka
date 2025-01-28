import { FiMousePointer } from "react-icons/fi";

const MessageClickStatus = ({
  silverColor,
  colorNotExist,
  order,
  ...props
}) => {
  let mess = order.messages[0];

  if (mess) {
    if (mess.clickedAt !== null) {
      return (
        <FiMousePointer color={"green"} key="k11" title={mess.clickedAt} />
      );
    } else {
      return (
        //todo translate
        <FiMousePointer
          title={"Przycisk w wiadomości nie został kliknięty"}
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
