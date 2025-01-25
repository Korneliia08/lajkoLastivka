import s from "./OrdersTableElement.module.scss";
import {FaClock, FaEyeSlash, FaRegEye} from "react-icons/fa";
import {BiSend} from "react-icons/bi";
import {FiMousePointer} from "react-icons/fi";
import {MdRateReview} from "react-icons/md";
import df from "../../../../../functions/dateFormat.js";
import {HiOutlineExclamationCircle} from "react-icons/hi";
import {useDispatch, useSelector} from "react-redux";
import {addOrderToSelected, removeSelectedOrder} from "../../ordersSlice.js";
import RozetkaStatusConverter from "../../../../../components/rozetkaStatusConverter/RozetkaStatusConverter.jsx";


const OrdersTableElement = ({order, index, ...props}) => {
    const dispatch = useDispatch()

    function returnMessageStatus() {
        // if (order.messages.length > 0) {
        const colorNotExist = 'rgba(104,104,104,0.16)'

        const silverColor = 'rgba(99,99,99,0.52)';
        const mess = order.messages[0];
        const icons = [];
        if (mess) {

            switch (mess.status) {
                case "pending":
                    icons.push(<FaClock color={'#bc4e00'} key="sent"/>);
                    break;
                case "sent":
                    icons.push(<BiSend color={'green'} key="pending" title={mess.sentAt}/>);
                    break;
                case "failed":
                    icons.push(<HiOutlineExclamationCircle color={'red'} key="failed"/>);
                    break;
            }
        } else {
            icons.push(<FaClock color={colorNotExist} key="sent"/>);
        }
        if (mess) {
            if (!mess.readAt) {
                icons.push(<FaEyeSlash color={silverColor} key="pending"/>);
            } else {
                icons.push(<FaRegEye color={'green'} key="pending" title={mess.readAt}/>);
            }
        } else {
            icons.push(<FaEyeSlash color={colorNotExist} key="sent"/>);
        }
        if (mess) {
            if (mess.clickedAt !== null) {
                icons.push(<FiMousePointer color={"green"} title={mess.clickedAt}/>);
            } else {
                icons.push(<FiMousePointer color={silverColor}/>);
            }
        } else {
            icons.push(<FiMousePointer color={colorNotExist} key="sent"/>);
        }

        if (order.hasReview) {
            icons.push(<MdRateReview color={"green"}/>);
        } else {
            icons.push(<MdRateReview color={silverColor}/>);
        }

        return icons;
        // } else {
        //     return `-----`;
        //}
    }

    const isChecked = useSelector(state => state.orders.selectedOrders).find(obj => obj.id === order.id) !== undefined
    return (
        <tr className={s.ordersTableElementContainer}>
            <td>
                <input type={'checkbox'} onChange={event => {

                    if (event.target.checked) {
                        dispatch(addOrderToSelected(order))
                    } else {
                        dispatch(removeSelectedOrder(order.id))
                    }
                }}
                       checked={isChecked}
                />
            </td>
            <td>
                {index}
            </td>
            <td>
                {order.orderId}
            </td>
            <td>
                {df(order.orderCreateTime, 'DD.MM.YYYY HH:mm')}
            </td>
            <td>
                <RozetkaStatusConverter>{order.status}</RozetkaStatusConverter>
            </td>

            <td>
                {df(order.updateTime, 'DD.MM.YYYY HH:mm')}
            </td>
            <td>
                {order.messages.length > 0 ? df(order.messages[0].scheduledTime, 'DD.MM.YYYY HH:mm') : ''}
            </td>
            <td className={s.icons}>
                <span>

                {returnMessageStatus()}
                </span>
            </td>
        </tr>
    )
}
export default OrdersTableElement;
