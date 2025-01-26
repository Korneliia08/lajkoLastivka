import s from "./OrderInformations.module.scss";
import OrdersTableTopPanel from "../../../../orders/ordersTable/ordersTableTopPanel/OrdersTableTopPanel.jsx";
import OrdersTable from "../../../../orders/ordersTable/OrdersTable.jsx";
import {useParams} from "react-router-dom";


const OrderInformations = ({...props}) => {
    const {id} = useParams()
    return (
        <div className={s.orderInformationsContainer}>
            <OrdersTableTopPanel/>
            <div className={s.ordersList}>
                <OrdersTable store={id}/>

            </div>
        </div>
    )
}
export default OrderInformations;
