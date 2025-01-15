import s from "./Dashboard.module.scss";
import InfoTile from "../../../components/ui/statisitc/infoTile/InfoTile.jsx";
import PanelTitle from "../../../components/layot/panelTitle/PanelTitle.jsx";
import LikeUnlikeCharBlock from "../../../components/features/statistics/likeUnlikeCharBlock/LikeUnlikeCharBlock.jsx";
import GeneralStatsCharBlock from "../../../components/features/statistics/generalStatsCharBlock/GeneralStatsCharBlock.jsx";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import MarketplacesOrdersCharBlock from "../../../components/features/statistics/marketplacesOrdersCharBlock/MarketplacesOrdersCharBlock.jsx";


const Dashboard = (props) => {
    return (
        <>

            <PanelTitle title={'Analytics Dashboard - This month'} subTitle={'See the latest analytics from your marketplaces'}/>
            <OutletPanelScroll>
                <div className={s.dashboardContainer}>
                    <div className={s.topRow}>

                        <InfoTile/>
                        <InfoTile/>
                        <InfoTile/>
                        <InfoTile/>
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
