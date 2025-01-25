import s from "./OrdersTableTopPanel.module.scss";
import OrdersTableTopPanelSearchInput from "./ordersTableTopPanelSearchInput/OrdersTableTopPanelSearchInput.jsx";
import OrdersTableTopPanelDatesRange from "./ordersTableTopPanelDatesRange/OrdersTableTopPanelDatesRange.jsx";


const OrdersTableTopPanel = ({...props}) => {

    return (
        <div className={s.ordersTableTopPanelContainer}>
            <OrdersTableTopPanelSearchInput/>
            <OrdersTableTopPanelDatesRange/>
            <button>Send fast message</button>
        </div>
    )
}
export default OrdersTableTopPanel;
