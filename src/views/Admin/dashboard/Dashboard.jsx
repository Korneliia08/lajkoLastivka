import s from "./Dashboard.module.scss";
import InfoTile from "../../../components/ui/statisitc/infoTile/InfoTile.jsx";
import PanelTitle from "../../../components/layot/panelTitle/PanelTitle.jsx";
import LikeUnlikeCharBlock from "../../../components/features/statistics/likeUnlikeCharBlock/LikeUnlikeCharBlock.jsx";
import GeneralStatsCharBlock from "../../../components/features/statistics/generalStatsCharBlock/GeneralStatsCharBlock.jsx";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import MarketplacesOrdersCharBlock from "../../../components/features/statistics/marketplacesOrdersCharBlock/MarketplacesOrdersCharBlock.jsx";
import useFetch from "../../../functions/useFetch.js";
import {blockStatsInitialData} from "./blockStatsInitialData.js";
import {CgMail, CgRead} from "react-icons/cg";
import {GiClick} from "react-icons/gi";


const Dashboard = (props) => {
    const {data, loading} = useFetch('dashboardPage/BlockData', {
        default: blockStatsInitialData
    });


    return (
        <>

            <PanelTitle title={'Analytics Dashboard - This month'} subTitle={'See the latest analytics from your marketplaces'}/>
            <OutletPanelScroll>
                <div className={s.dashboardContainer}>
                    <div className={s.topRow}>

                        <InfoTile icon={<CgMail/>} value={data.sendInMonth.current} secondValue={data.sendInMonth.change} title={'Send messages'}/>
                        <InfoTile icon={<CgRead/>} value={data.readInMonth.current} secondValue={data.readInMonth.change} title={'Read messages'}
                                  secondValueColor={'red'}/>
                        <InfoTile icon={<GiClick/>} value={data.clickInMonth.current} secondValue={data.clickInMonth.change} title={'Click messages'}
                                  secondValueColor={'red'}/>
                        <InfoTile title={'Write comment'}/>
                    </div>
                    <div className={s.div3}>
                        <GeneralStatsCharBlock/>
                    </div>
                    <div className={s.likeUnlike}>
                        <LikeUnlikeCharBlock/>
                    </div>
                    <div className={s.orders}>
                        <MarketplacesOrdersCharBlock/>
                    </div>
                    <div className={s.div4}></div>
                </div>
            </OutletPanelScroll>
        </>
    )
}
export default Dashboard;
