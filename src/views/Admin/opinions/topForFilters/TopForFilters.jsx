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
  raw,
  setStartTime,
  ...props
}) => {
  const filterOptions = [
    {
      label: `Прочитано (${(raw && raw.statistics.readed) || 0}) `,
      value: "readed",
    },
    {
      label: `Посилань відвідано (${(raw && raw.statistics.clicked) || 0})`,
      value: "clicked",
    },
    {
      label: `Оцінено 1-3 (${(raw && raw.statistics.rating13) || 0})`,
      value: "rating13",
    },
    {
      label: `Оцінено 4-5 (${(raw && raw.statistics.rating45) || 0})`,
      value: "rating45",
    },
    {
      label: `Відгуків у FeedMp (${(raw && raw.statistics.opinionFeedMP) || 0})`,
      value: "opinionFeedMP",
    },
    {
      label: `Відгуків у Rozetka (${(raw && raw.statistics.opinionRozetka) || 0})`,
      value: "opinionRozetka",
    },
    // {
    //   label: `Відгуків у Rozetka (${(raw && raw.statistics.opinionWithoutLocalRating) || 0}) !!!`,
    //   value: "opinionWithoutLocalRating",
    // },
  ];
  console.log(raw);
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
