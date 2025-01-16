import s from "./Statistics.module.scss";
import PanelTitle from "../../../components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import Select from "react-select";
import SendReadCommentCharBlock from "../../../components/features/statistics/sendReadCommentCharBlock/SendReadCommentCharBlock.jsx";


const Statistics = ({...props}) => {
    return (
        <>
            <PanelTitle title={'Статистики:'} subTitle={'See your marketplaces statistics'}/>
            <OutletPanelScroll>
                <div className={s.statisticsContainer}>
                    <div className={s.selectMarketplace}>
                        <span>Select marketplace:</span><Select/>
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
