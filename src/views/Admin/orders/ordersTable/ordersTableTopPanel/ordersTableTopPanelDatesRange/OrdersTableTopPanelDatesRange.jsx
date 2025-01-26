import s from "./OrdersTableTopPanelDatesRange.module.scss";
import {DateTimePicker} from "@mui/x-date-pickers";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setEndTime, setStartTime} from "../../../ordersSlice.js";
import {TextField} from "@mui/material";
import dayjs from "dayjs";

const OrdersTableTopPanelDatesRange = ({...props}) => {
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
            dispatch(setStartTime(value)); // Aktualizacja startTime w Redux
        }
    };

    const handleEndTimeChange = (value) => {
        // Sprawdzamy, czy wartość jest prawidłowa przed aktualizacją stanu
        console.log(value);
        if (value) {
            setLocalEndTime(value);
            dispatch(setEndTime(value)); // Aktualizacja endTime w Redux
        }
    };

    return (
        < >

            <DateTimePicker
                ampm={false}
                maxDateTime={localEndTime}
                label="Start Time"
                value={localStartTime}
                onChange={handleStartTimeChange}
                format="YYYY-MM-DD HH:mm"
                renderInput={(params) => <TextField
                    {...params}
                    style={{paddingTop: 0, paddingBottom: 0}}
                />}
                className={s.ordersTableTopPanelDatesRangeContainer}
            />
            <DateTimePicker
                ampm={false}
                label="End Time"
                maxDateTime={dayjs(new Date())}
                minDateTime={localStartTime}
                value={localEndTime} format="YYYY-MM-DD HH:mm"
                onChange={handleEndTimeChange}
                renderInput={(params) => <TextField
                    {...params}
                    style={{paddingTop: 0, paddingBottom: 0}}
                />}
                className={s.ordersTableTopPanelDatesRangeContainer}
            />

        </>
    );
};

export default OrdersTableTopPanelDatesRange;
