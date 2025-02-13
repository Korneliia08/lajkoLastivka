import s from "./TopForFilters.module.scss";
import OpinionsSelectDataRange from "@/views/Admin/opinions/components/opinionsSelectDataRange/OpinionsSelectDataRange.jsx";
import OpinionsSelectMarketplace from "@/views/Admin/opinions/components/opinionsSelectMarketplace/OpinionsSelectMarketplace.jsx";

const TopForFilters = ({
  setEndTime,
  endTime,
  startTime,
  setStartTime,
  ...props
}) => {
  return (
    <div className={s.topForFiltersContainer}>
      <div className={s.blockForContent}>
        <h5 className={s.titleUsers}>Користувачі</h5>
        <p className={s.contentUsers}>Усі користувачі,які оцінили замовлення</p>
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
