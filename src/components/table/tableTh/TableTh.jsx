import React from "react";
import style from "./TableTh.module.scss";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const TableTh = ({
  column,
  sortColumn,
  setSortColumn,
  setSortDirection,
  sortDirection = "asc",
  children,
}) => {
  const handleSort = () => {
    let nextDirection;
    if (sortColumn === column) {
      nextDirection =
        sortDirection === "asc"
          ? "desc"
          : sortDirection === "desc"
            ? null
            : "asc";
    } else {
      nextDirection = "asc";
    }
    if (nextDirection) {
      setSortColumn(column);
      setSortDirection(nextDirection);
    } else {
      setSortColumn(null);
      setSortDirection(null);
    }
  };

  const isSorting = sortColumn === column;
  const iconColor = isSorting ? "#001c7a" : "#454545";

  return (
    <th className={style.tableThContainer} onClick={handleSort}>
      <div className={style.container}>
        <span className={style.title}>{children}</span>
        <span className={style.icons} style={{ color: iconColor }}>
          {isSorting && sortDirection === "asc" && (
            <AiOutlineArrowUp className={style.icon} color="blue" />
          )}
          {isSorting && sortDirection === "desc" && (
            <AiOutlineArrowDown className={style.icon} color="blue" />
          )}
          {!isSorting && (
            <div>
              <AiOutlineArrowUp color="gray" />
              <AiOutlineArrowDown color="gray" />
            </div>
          )}
        </span>
      </div>
    </th>
  );
};

export default TableTh;
