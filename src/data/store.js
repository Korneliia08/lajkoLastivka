import { configureStore } from "@reduxjs/toolkit";
import OrdersSlice from "../views/Admin/orders/ordersSlice.js";
import MarketplaceFormSlice from "@/views/Admin/Marketplace/addAndEditMarketPlace/marketplaceFormSlice.js";

export const store = configureStore({
  reducer: {
    orders: OrdersSlice,
    marketplaceForm: MarketplaceFormSlice,
  },
  devTools: {
    serializableCheck: false,
  },
});
