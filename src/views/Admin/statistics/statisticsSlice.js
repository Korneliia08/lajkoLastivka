import { createSlice } from "@reduxjs/toolkit";
import ms from "ms";

const statisticsSlice = createSlice({
  name: "statisticsPage",
  initialState: {
    startTime: new Date(new Date().getTime() - ms("7d")),
    endTime: new Date(new Date().getTime()),
  },

  reducers: {
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload;
    },
  },
});

export const { setStartTime, setEndTime } = statisticsSlice.actions;
export default statisticsSlice.reducer;
