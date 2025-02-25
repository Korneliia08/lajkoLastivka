import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import s from "@/views/Admin/opinions/Opinions.module.scss";
import OutletPanelScroll from "@/components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import CardOfUser from "@/views/Admin/opinions/cardOfUser/CardOfUser.jsx";
import useFetch from "@hooks/useFetch.js";
import { useEffect, useState } from "react";
import ms from "ms";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import TopForFilters from "@/views/Admin/opinions/topForFilters/TopForFilters.jsx";
import dayjs from "dayjs";

const Opinions = ({ ...props }) => {
  const [filter, setFilter] = useState();
  const [startTime, setStartTime] = useState(
    dayjs(new Date().getTime() - ms("7d")),
  );
  const [page, setPage] = useState(1);
  const [endTime, setEndTime] = useState(dayjs(new Date().getTime()));
  const { id } = useParams();
  const { data, pagination, raw } = useFetch(
    `/opinions-page?startTime=${startTime.unix()}&endTime=${endTime.unix()}&storeId=${id}&filter=${filter ? filter.value : ""}`,
    {
      withPagination: true,
    },
  );
  useEffect(() => {
    pagination.setPage(1);
  }, [filter]);

  const [isOpenBottomCard, setOpenBottomCard] = useState(-1);

  return (
    <>
      <OutletPanelScroll>
        <PanelTitle
          inner={true}
          title={"Відгуки:"}
          subTitle={
            "Перегляд користувачів, які залишили відгук, та відображення їхніх відгуків у нашій внутрішній системі та на розетці."
          }
        />

        <TopForFilters
          setFilter={setFilter}
          startTime={startTime}
          filter={filter}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
        />

        <div className={s.opinionsContainer}>
          {data &&
            data.map((obj) => {
              return (
                <CardOfUser
                  setOpenBottomCard={setOpenBottomCard}
                  isOpenBottomCard={isOpenBottomCard}
                  data={obj}
                />
              );
            })}
        </div>
        <div className={s.paggination}>
          {raw && (
            <Pagination
              onChange={(event, page) => pagination.setPage(page)}
              count={Math.ceil(raw.total / raw.take)}
              shape="rounded"
            />
          )}
        </div>
      </OutletPanelScroll>
    </>
  );
};
export default Opinions;
