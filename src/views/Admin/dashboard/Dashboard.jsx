import s from "./Dashboard.module.scss";
import InfoTile from "../../../components/ui/statisitc/infoTile/InfoTile.jsx";
import PanelTitle from "../../../components/layot/panelTitle/PanelTitle.jsx";
import LikeUnlikeCharBlock from "../../../components/features/statistics/likeUnlikeCharBlock/LikeUnlikeCharBlock.jsx";
import GeneralStatsCharBlock from "../../../components/features/statistics/generalStatsCharBlock/GeneralStatsCharBlock.jsx";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import MarketplacesOrdersCharBlock from "../../../components/features/statistics/marketplacesOrdersCharBlock/MarketplacesOrdersCharBlock.jsx";
import useFetch from "@hooks/useFetch.js";
import { blockStatsInitialData } from "./blockStatsInitialData.js";
import { CgMail, CgRead } from "react-icons/cg";
import { GiClick } from "react-icons/gi";
import { MdOutlineRateReview } from "react-icons/md";

const Dashboard = (props) => {
  const { data, loading } = useFetch("dashboardPage/BlockData", {
    default: blockStatsInitialData,
  });

  return (
    <>
      <OutletPanelScroll>
        <PanelTitle
          inner={true}
          title={"Аналітика - цього місяця"}
          subTitle={"Актуальні дані з усіх Ваших маркетплейсів"}
        />
        <div className={s.dashboardContainer}>
          <div className={s.topRow}>
            <InfoTile
              icon={<CgMail />}
              value={data.sendInMonth.current}
              secondValue={data.sendInMonth.change}
              title={"Надіслані повідомлення"}
            />
            <InfoTile
              icon={<CgRead />}
              value={data.readInMonth.current}
              secondValue={data.readInMonth.change}
              title={"Прочитані повідомлення"}
              secondValueColor={"red"}
            />
            <InfoTile
              icon={<GiClick />}
              value={data.clickInMonth.current}
              secondValue={data.clickInMonth.change}
              title={"Відвідані посилання"}
              secondValueColor={"red"}
            />
            <InfoTile
              value={data.writeOpinions.current}
              secondValue={data.writeOpinions.change}
              icon={<MdOutlineRateReview />}
              title={"Написані відгуки"}
            />
          </div>
          <div className={s.div3}>
            <GeneralStatsCharBlock />
          </div>
          <div className={s.likeUnlike}>
            <LikeUnlikeCharBlock type={"rozetka"} />
          </div>
          <div className={s.likeUnlikeLocal}>
            <LikeUnlikeCharBlock type={"local"} />
          </div>
          <div className={s.orders}>
            <MarketplacesOrdersCharBlock />
          </div>
          <div className={s.div4}></div>
        </div>
      </OutletPanelScroll>
    </>
  );
};
export default Dashboard;
