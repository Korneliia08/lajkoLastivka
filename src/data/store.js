import {configureStore} from '@reduxjs/toolkit'
import OrdersSlice from "../views/Admin/orders/ordersSlice.js";

export const store = configureStore({
    reducer: {
        orders: OrdersSlice,

    },
})
