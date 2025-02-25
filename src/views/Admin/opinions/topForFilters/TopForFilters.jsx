import s from "./TopForFilters.module.scss";
import OpinionsSelectDataRange from "@/views/Admin/opinions/components/opinionsSelectDataRange/OpinionsSelectDataRange.jsx";
import OpinionsSelectMarketplace from "@/views/Admin/opinions/components/opinionsSelectMarketplace/OpinionsSelectMarketplace.jsx";
import Select from "react-select";

const TopForFilters = ({
  setFilter,
  filter,
  setEndTime,
  endTime,
  startTime,
  setStartTime,
  ...props
}) => {
  const filterOptions = [
    { label: "Прочитано", value: "readed" },
    { label: "Посилань відвідано", value: "clicked" },
    { label: "Оцінено1-3", value: "rating13" },
    { label: "Оцінено 4-5", value: "rating45" },
    { label: "Відгуків у FeedMp", value: "opinionFeedMP" },
    { label: "Відгуків у Rozetka", value: "opinionRozetka" },
  ];
  return (
    <div className={s.topForFiltersContainer}>
      <div className={s.blockForContent}>
        <h5 className={s.titleUsers}>Користувачі</h5>
        <p className={s.contentUsers}>Усі користувачі,які оцінили замовлення</p>
      </div>
      <div className={s.filters}>
        <Select
          isClearable={true}
          value={filter}
          className={s.filterSelect}
          onChange={setFilter}
          placeholder={"Оберіть"}
          options={filterOptions}
        />
        <OpinionsSelectDataRange
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
        />{" "}
        <OpinionsSelectMarketplace />
      </div>
    </div>
  );
};
export default TopForFilters;
