import s from "./OpinionsSelectDataRange.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import dayjs from "dayjs";
import { setEndTime, setStartTime } from "@/views/Admin/orders/ordersSlice.js";
import { DateTimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const OpinionsSelectDataRange = ({ ...props }) => {
  const dispatch = useDispatch();
  const startTime = useSelector((state) => state.orders.startTime);
  const endTime = useSelector((state) => state.orders.endTime);

  // Używamy Date(), ponieważ DateTimePicker wymaga wartości typu Date

  const [localStartTime, setLocalStartTime] = useState(dayjs(startTime));
  const [localEndTime, setLocalEndTime] = useState(dayjs(endTime));

  const handleStartTimeChange = (value) => {
    // Sprawdzamy, czy wartość jest prawidłowa przed aktualizacją stanu
    if (value) {
      setLocalStartTime(value);
      dispatch(setStartTime(new Date(value).getTime()));
    }
  };

  const handleEndTimeChange = (value) => {
    console.log(value);
    if (value) {
      setLocalEndTime(value);
      dispatch(setEndTime(new Date(value).getTime()));
    }
  };

  return (
    <>
      <DateTimePicker
        ampm={false}
        maxDateTime={localEndTime}
        label="Початок"
        value={localStartTime}
        onChange={handleStartTimeChange}
        format="YYYY-MM-DD HH:mm"
        renderInput={(params) => (
          <TextField {...params} style={{ paddingTop: 0, paddingBottom: 0 }} />
        )}
        className={s.ordersTableTopPanelDatesRangeContainer}
      />
      <DateTimePicker
        ampm={false}
        label="Кінець"
        maxDateTime={dayjs(new Date())}
        minDateTime={localStartTime}
        value={localEndTime}
        format="YYYY-MM-DD HH:mm"
        onChange={handleEndTimeChange}
        renderInput={(params) => (
          <TextField {...params} style={{ paddingTop: 0, paddingBottom: 0 }} />
        )}
        className={s.ordersTableTopPanelDatesRangeContainer}
      />
    </>
  );
};
export default OpinionsSelectDataRange;
