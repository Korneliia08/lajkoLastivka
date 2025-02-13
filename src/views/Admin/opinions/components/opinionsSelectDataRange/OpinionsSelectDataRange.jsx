import { DateTimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import s from "./OpinionsSelectDataRange.module.scss";
import dayjs from "dayjs";

const OpinionsSelectDataRange = ({
  setEndTime,
  endTime,
  startTime,
  setStartTime,
  ...props
}) => {
  const handleStartTimeChange = (value) => {
    if (value) {
      setStartTime(value);
    }
  };

  const handleEndTimeChange = (value) => {
    if (value) {
      setEndTime(value);
    }
  };

  return (
    <>
      <DateTimePicker
        ampm={false}
        maxDateTime={dayjs(endTime)}
        label="Початок"
        value={dayjs(startTime)}
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
        minDateTime={dayjs(startTime)}
        value={dayjs(endTime)}
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
