import s from "./OrdersTable.module.scss";
import useFetch from "../../../../functions/useFetch.js";
import OrdersTableElement from "./ordersTableElement/OrdersTableElement.jsx";
import {useEffect, useRef, useState} from "react";

import {Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addOrderToSelected, removeSelectedOrder} from "../ordersSlice.js";
import TableTh from "../../../../components/table/tableTh/TableTh.jsx";
import dayjs from "dayjs";

const OrdersTable = ({...props}) => {
    const [limit, setLimit] = useState(14);
    const [sortDirection, setSortDirection] = useState('')
    const [sortColumn, setSortColumn] = useState('')
    const findText = useSelector(state => state.orders.searchInput);
    const startDate = useSelector((state) => state.orders.startTime);
    const endDate = useSelector((state) => state.orders.endTime);
    const startDateUtc = startDate ? dayjs(startDate).toISOString() : null;
    const endDateUtc = endDate ? dayjs(endDate).toISOString() : null;
    const {data, pagination, loading} = useFetch('orders/table?test=123', {
        default: [],
        withPagination: true,
        limit: limit,
        page: 1,
        params: `&sortDirection=${sortDirection}&sortColumn=${sortColumn}&find=${findText}&startTime=${startDateUtc}&endTime=${endDateUtc}`
    });
    const selectedOrders = useSelector(state => state.orders.selectedOrders);
    const dispatch = useDispatch();

    const allVisibleSelected = data.every(order => selectedOrders.some(selected => selected.id === order.id));
    const someVisibleSelected = data.some(order => selectedOrders.some(selected => selected.id === order.id));

    const toggleAllVisible = () => {
        if (allVisibleSelected) {
            // Odznacz wszystkie widoczne
            data.forEach(order => {
                if (selectedOrders.some(selected => selected.id === order.id)) {
                    dispatch(removeSelectedOrder(order.id));
                }
            });
        } else {
            // Zaznacz wszystkie widoczne
            data.forEach(order => {
                if (!selectedOrders.some(selected => selected.id === order.id)) {
                    dispatch(addOrderToSelected(order));
                }
            });
        }
    };
    const headerCheckboxRef = useRef();
    useEffect(() => {
        if (headerCheckboxRef.current) {
            headerCheckboxRef.current.indeterminate =
                someVisibleSelected && !allVisibleSelected;
        }
    }, [someVisibleSelected, allVisibleSelected]);
    return (
        <table className={s.ordersTableContainer}>
            <thead>
            <tr>
                <th>
                    <input
                        type="checkbox"
                        onChange={toggleAllVisible}
                        checked={allVisibleSelected}
                        ref={headerCheckboxRef}
                    />
                    {selectedOrders.length > 0 ? `(${selectedOrders.length})` : ''}
                </th>
                <th>Lp.</th>
                <TableTh
                    setSortDirection={setSortDirection} setSortColumn={setSortColumn}
                    sortDirection={sortDirection} sortColumn={sortColumn}
                    column={'orderId'}>Order ID</TableTh>
                <TableTh setSortDirection={setSortDirection} setSortColumn={setSortColumn}
                         sortDirection={sortDirection} sortColumn={sortColumn} column={'orderCreateTime'}>Create time</TableTh>
                <TableTh setSortDirection={setSortDirection} setSortColumn={setSortColumn}
                         sortDirection={sortDirection} sortColumn={sortColumn} column={'status'}>Status</TableTh>
                <TableTh setSortDirection={setSortDirection} setSortColumn={setSortColumn}
                         sortDirection={sortDirection} sortColumn={sortColumn} column={'updateTime'}>Status update</TableTh>
                <th> Message send Date</th>
                <th>Message status</th>
            </tr>
            </thead>
            <tbody>
            {data.map((order, index) => (
                <OrdersTableElement
                    order={order}
                    index={index + ((pagination.page - 1) * limit) + 1}
                    key={order.id}
                />
            ))}
            </tbody>
            <tfoot>
            <tr>
                <td colSpan={999}>
                    <div>
                        <Pagination
                            onChange={(event, page) => pagination.setPage(page)}
                            count={pagination.totalPages}
                            shape="rounded"
                        />
                    </div>
                </td>
            </tr>
            </tfoot>
        </table>
    );
};

export default OrdersTable;
