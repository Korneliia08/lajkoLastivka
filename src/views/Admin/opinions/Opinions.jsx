import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import s from "@/views/Admin/opinions/Opinions.module.scss";
import OutletPanelScroll from "@/components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import CardOfUser from "@/views/Admin/opinions/cardOfUser/CardOfUser.jsx";
import useFetch from "@hooks/useFetch.js";
import { useState } from "react";
import { Pagination } from "@mui/material";
import TopForFilters from "@/views/Admin/opinions/topForFilters/TopForFilters.jsx";
import ms from "ms";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const Opinions = ({ ...props }) => {
  const [startTime, setStartTime] = useState(
    dayjs(new Date().getTime() - ms("7d")),
  );
  const [endTime, setEndTime] = useState(dayjs(new Date().getTime()));
  const { id } = useParams();
  const { data } = useFetch(
    `/opinions-page?startTime=${startTime.unix()}&endTime=${endTime.unix()}&storeId=${id}`,
  );
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
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
        />

        <div className={s.opinionsContainer}>
          {data.map((obj) => {
            return (
              <CardOfUser
                setOpenBottomCard={setOpenBottomCard}
                isOpenBottomCard={isOpenBottomCard}
                data={obj}
              />
            );
          })}
        </div>
        <div>
          {" "}
          <Pagination
            // onChange={(event, page) => pagination.setPage(page)}
            count={10}
            shape="rounded"
          />
        </div>
      </OutletPanelScroll>
    </>
  );
};
export default Opinions;
