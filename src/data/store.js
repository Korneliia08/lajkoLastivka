import { configureStore } from "@reduxjs/toolkit";
import OrdersSlice from "../views/Admin/orders/ordersSlice.js";
import MarketplaceFormSlice from "@/views/Admin/Marketplace/addAndEditMarketPlace/marketplaceFormSlice.js";
import statisticsSlice from "@/views/Admin/statistics/statisticsSlice.js";

export const store = configureStore({
  reducer: {
    orders: OrdersSlice,
    marketplaceForm: MarketplaceFormSlice,
    statistics: statisticsSlice,
  },
  devTools: {
    serializableCheck: false,
  },
});
