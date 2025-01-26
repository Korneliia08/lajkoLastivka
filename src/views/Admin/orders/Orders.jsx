import s from "./Orders.module.scss";
import PanelTitle from "../../../components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import OrdersTable from "./ordersTable/OrdersTable.jsx";
import OrdersTableTopPanel from "./ordersTable/ordersTableTopPanel/OrdersTableTopPanel.jsx";
import {useParams} from "react-router-dom";


const Orders = ({...props}) => {
    const [id] = useParams()
    return (

        <>
            <PanelTitle title={'Orders:'} subTitle={'See your marketplace orders'}/>
            <OutletPanelScroll>
                <div className={s.ordersContainer}>
                    <OrdersTableTopPanel/>
                    <div className={s.ordersList}>
                        <OrdersTable store={id}/>

                    </div>
                </div>
            </OutletPanelScroll>
        </>

    )
}
export default Orders;
