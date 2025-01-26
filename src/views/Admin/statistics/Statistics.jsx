import s from "./Statistics.module.scss";
import PanelTitle from "../../../components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import SendReadCommentCharBlock from "../../../components/features/statistics/sendReadCommentCharBlock/SendReadCommentCharBlock.jsx";
import StatisticSelectMarketplace from "./components/statisticSelectMarketplace/StatisticSelectMarketplace.jsx";


const Statistics = ({...props}) => {
    return (
        <>
            <PanelTitle title={'Статистики:'} subTitle={'See your marketplaces statistics'}/>
            <OutletPanelScroll>
                <div className={s.statisticsContainer}>
                    <div className={s.selectMarketplace}>
                        <StatisticSelectMarketplace/>

                        <div className={s.stats1}>
                            <SendReadCommentCharBlock/>
                        </div>
                    </div>
                </div>
            </OutletPanelScroll>
        </>
    )
}
export default Statistics;
