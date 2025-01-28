import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { setSearchInput } from "../../../ordersSlice.js";
import s from "./OrdersTableTopPanelSearchInput.module.scss";
import InputWithIcon from "@/components/ui/form/inputWithIcon/InputWithIcon.jsx";

const OrdersTableTopPanelSearchInput = ({ ...props }) => {
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);
  const [inputValue, setInputValue] = useState(
    useSelector((state) => state.orders.searchInput),
  );

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    // Natychmiast aktualizuj lokalny stan
    setInputValue(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Ustaw debouncing do zapisu do stanu Redux
    timeoutRef.current = setTimeout(() => {
      dispatch(setSearchInput(value));
    }, 500);
  };

  return (
    <InputWithIcon
      className={s.input}
      value={inputValue}
      type="text"
      onChange={handleSearchInputChange}
      placeholder="Search..."
      {...props}
    />
  );
};

export default OrdersTableTopPanelSearchInput;
