import s from "./Statistics.module.scss";
import PanelTitle from "../../../components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import StatisticSelectMarketplace from "./components/statisticSelectMarketplace/StatisticSelectMarketplace.jsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StatisticRatingChar from "./components/charts/statisticRatingChar/StatisticRatingChar.jsx";
import StatisticLineChar from "@/views/Admin/statistics/components/statisticLineChar/StatisticLineChar.jsx";
import StatisticsSelectDate from "@/views/Admin/statistics/components/statisticsSelectDate/StatisticsSelectDate.jsx";

const Statistics = ({ ...props }) => {
  const { id } = useParams();
  const [storeId, setStoreId] = useState(id);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      setStoreId(id);
    }
  }, [id]);
  if (!id) {
    console.log("1");
    navigate("/admin/statistics/0");
  }
  return (
    <>
      <OutletPanelScroll>
        <PanelTitle
          inner={true}
          title={"Статистики:"}
          subTitle={"Перегляд статистик вибраного магазину"}
        />
        <div className={s.statisticsContainer}>
          <div className={s.selectMarketplace}>
            <StatisticSelectMarketplace
              setStoreId={setStoreId}
              storeId={storeId}
            />
            <StatisticsSelectDate />
          </div>
          {id && (
            <>
              <div className={s.stats1}>
                <StatisticLineChar />
                {/*<SendReadCommentCharBlock/>*/}
              </div>
              <div className={s.stats2}>
                <StatisticRatingChar storeId={storeId} mode={"store"} />
              </div>
              <div className={s.stats3}>
                <StatisticRatingChar storeId={storeId} mode={"local"} />
              </div>
            </>
          )}
        </div>
      </OutletPanelScroll>
    </>
  );
};
export default Statistics;
