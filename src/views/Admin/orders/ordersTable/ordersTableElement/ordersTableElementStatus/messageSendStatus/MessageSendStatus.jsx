import {FaClock, FaStop} from "react-icons/fa";
import {BiSend} from "react-icons/bi";
import {HiOutlineExclamationCircle} from "react-icons/hi";

const MessageSendStatus = ({colorNotExist, order, ...props}) => {
    let mess = order.messages[0];
    if (mess) {
        switch (mess.status) {
            case "pending":
                return <FaClock color={"#bc4e00"} key="K3"/>;

            case "sent":
                return <BiSend color={"green"} key="K5" title={mess.sentAt}/>;
            case "failed":
                return (
                    <HiOutlineExclamationCircle
                        title={"Надсилання повідомлення не вдалося"}
                        color={"red"}
                        key="K4"
                    />
                );
            case "canceld":
                return (
                    <FaStop
                        title={"Надсилання повідомлення було скасовано"}
                        color={"red"}
                        key="K6"
                    />
                );
        }
    } else {
        return (
            <FaClock
                title={"Повідомлення чекає на відправку"}
                color={colorNotExist}
                key="K7"
            />
        );
    }
};
export default MessageSendStatus;
