import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import s from "@/views/Admin/opinions/Opinions.module.scss";
import OutletPanelScroll from "@/components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import CardOfUser from "@/views/Admin/opinions/cardOfUser/CardOfUser.jsx";
import useFetch from "@hooks/useFetch.js";
import OpinionsSelectMarketplace from "@/views/Admin/opinions/components/opinionsSelectMarketplace/OpinionsSelectMarketplace.jsx";
import { useState } from "react";
import { Pagination } from "@mui/material";

const Opinions = ({ ...props }) => {
  const { data } = useFetch("/opinions-page");
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
        <OpinionsSelectMarketplace />
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
