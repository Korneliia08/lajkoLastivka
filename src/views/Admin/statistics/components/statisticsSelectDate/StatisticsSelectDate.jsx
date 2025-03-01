import s from "./StatisticsSelectDate.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import dayjs from "dayjs";

import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import {
  setEndTime,
  setStartTime,
} from "@/views/Admin/statistics/statisticsSlice.js";
import Select from "react-select";

const daysOptions = [
  { value: 7, label: "7 днів" },
  { value: 30, label: "30 днів" },
  { value: 90, label: "90 днів" },
  { value: 180, label: "180 днів" },
  { value: 360, label: "365 днів" },
];

const StatisticsSelectDate = ({ ...props }) => {
  const dispatch = useDispatch();
  const startTime = useSelector((state) => state.statistics.startTime);
  const endTime = useSelector((state) => state.statistics.endTime);

  const [localStartTime, setLocalStartTime] = useState(dayjs(startTime));
  const [localEndTime, setLocalEndTime] = useState(dayjs(endTime));

  const handleStartTimeChange = (value) => {
    if (value) {
      setLocalStartTime(value);
      dispatch(setStartTime(value));
    }
  };

  const handleEndTimeChange = (value) => {
    if (value) {
      setLocalEndTime(value);
      dispatch(setEndTime(value));
    }
  };

  const handleDaysChange = (selectedOption) => {
    const daysAgo = dayjs()
      .subtract(selectedOption.value, "day")
      .startOf("day");
    setLocalStartTime(daysAgo);
    setLocalEndTime(dayjs());

    dispatch(setStartTime(daysAgo));
    dispatch(setEndTime(dayjs()));
  };

  return (
    <div className={s.container}>
      <DatePicker
        ampm={false}
        maxDate={localEndTime}
        label="Початок"
        value={localStartTime}
        onChange={handleStartTimeChange}
        format="YYYY-MM-DD"
        renderInput={(params) => (
          <TextField {...params} style={{ paddingTop: 0, paddingBottom: 0 }} />
        )}
        className={s.ordersTableTopPanelDatesRangeContainer}
      />
      <DatePicker
        ampm={false}
        label="Кінець"
        maxDate={dayjs(new Date())}
        minDate={localStartTime}
        value={localEndTime}
        format="YYYY-MM-DD"
        onChange={handleEndTimeChange}
        renderInput={(params) => (
          <TextField {...params} style={{ paddingTop: 0, paddingBottom: 0 }} />
        )}
        className={s.ordersTableTopPanelDatesRangeContainer}
      />
      <Select
        className={s.select}
        defaultValue={daysOptions[0]}
        options={daysOptions}
        onChange={handleDaysChange}
      />
    </div>
  );
};

export default StatisticsSelectDate;
