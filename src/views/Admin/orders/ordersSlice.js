import {createSlice} from '@reduxjs/toolkit'
import ms from "ms";

const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        selectedOrders: [],
        searchInput: '',
        startTime: new Date().getTime() - ms('7d'),
        endTime: new Date().getTime(),
        refresh: 1
    },


    reducers: {
        refreshOrdersList: (state, action) => {
            state.refresh = new Date().getTime()
        },

        setStartTime: (state, action) => {
            state.startTime = action.payload;
        },
        setEndTime: (state, action) => {
            state.endTime = action.payload;
        },
        setSearchInput(state, action) {
            state.searchInput = action.payload
        },
        addOrderToSelected(state, action) {
            const find = state.selectedOrders.find((order) => order.id === action.payload);

            if (!find) {
                state.selectedOrders.push(action.payload)
            }
        },
        removeSelectedOrder(state, action) {
            state.selectedOrders = state.selectedOrders.filter((order) => order.id !== action.payload);
        },
        removeAllSelectedOrder(state) {
            state.selectedOrders = []
        }
    },
})

export const {
    refreshOrdersList,
    setStartTime,
    setEndTime,
    setSearchInput,
    addOrderToSelected,
    removeSelectedOrder,
    removeAllSelectedOrder
} = ordersSlice.actions
export default ordersSlice.reducer
