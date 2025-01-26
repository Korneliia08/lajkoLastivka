import s from "./OrdersTableElement.module.scss";
import {FaClock, FaEyeSlash, FaRegEye, FaStop} from "react-icons/fa";
import {BiSend} from "react-icons/bi";
import {FiMousePointer} from "react-icons/fi";
import {MdRateReview} from "react-icons/md";
import df from "../../../../../functions/dateFormat.js";
import {HiOutlineExclamationCircle} from "react-icons/hi";
import {useDispatch, useSelector} from "react-redux";
import {addOrderToSelected, removeSelectedOrder} from "../../ordersSlice.js";
import RozetkaStatusConverter from "../../../../../components/rozetkaStatusConverter/RozetkaStatusConverter.jsx";
import {ImCancelCircle} from "react-icons/im";
import {FaHand} from "react-icons/fa6";


const OrdersTableElement = ({order, index, ...props}) => {
    const dispatch = useDispatch()

    function returnMessageStatus() {
        // if (order.messages.length > 0) {
        const colorNotExist = 'rgba(104,104,104,0.16)'

        const silverColor = 'rgba(99,99,99,0.52)';
        const icons = [];
        if (!order.messages[0]) {
            return '----'
        }
        let mess = order.messages[0];
        if (mess.status == 'canceled') {
            if (order.messages[order.messages.length - 1]) {
                mess = order.messages[order.messages.length - 1]
                if (mess.messageType == 'manual') {
                    icons.push(<FaHand color={'#008103'} key="K1"/>);
                }
            } else {

                icons.push(<ImCancelCircle color={'#0026bc'} key="K2"/>);
            }
        }
        if (mess) {

            switch (mess.status) {
                case "pending":
                    icons.push(<FaClock color={'#bc4e00'} key="K3"/>);
                    break;
                case "sent":
                    icons.push(<BiSend color={'green'} key="K5" title={mess.sentAt}/>);
                    break;
                case "failed":
                    icons.push(<HiOutlineExclamationCircle color={'red'} key="K4"/>);
                    break;
                case "canceld":
                    icons.push(<FaStop color={'red'} key="K6"/>);
                    break;
            }
        } else {
            icons.push(<FaClock color={colorNotExist} key="K7"/>);
        }
        if (mess) {
            if (!mess.readAt) {
                icons.push(<FaEyeSlash key="k8" color={silverColor}/>);
            } else {
                icons.push(<FaRegEye color={'green'} key="k9" title={mess.readAt}/>);
            }
        } else {
            icons.push(<FaEyeSlash color={colorNotExist} key="k10"/>);
        }
        if (mess) {
            if (mess.clickedAt !== null) {
                icons.push(<FiMousePointer color={"green"} key="k11" title={mess.clickedAt}/>);
            } else {
                icons.push(<FiMousePointer key="K12" color={silverColor}/>);
            }
        } else {
            icons.push(<FiMousePointer color={colorNotExist} key="k13"/>);
        }

        if (order.hasReview) {
            icons.push(<MdRateReview key="K14" color={"green"}/>);
        } else {
            icons.push(<MdRateReview key="K15" color={silverColor}/>);
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
                {order.messages.length > 0 ? df(order.messages[order.messages.length - 1].scheduledTime, 'DD.MM.YYYY HH:mm') : ''}
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
