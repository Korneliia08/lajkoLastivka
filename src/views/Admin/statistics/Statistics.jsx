import s from "./Statistics.module.scss";
import PanelTitle from "../../../components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import StatisticSelectMarketplace from "./components/statisticSelectMarketplace/StatisticSelectMarketplace.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StatisticRatingChar from "./components/charts/statisticRatingChar/StatisticRatingChar.jsx";
import SendReadCommentCharBlock from "../../../components/features/statistics/sendReadCommentCharBlock/SendReadCommentCharBlock.jsx";


const Statistics = ({...props}) => {
    const {id} = useParams()
    const [storeId, setStoreId] = useState(id)
    useEffect(() => {
        if (id) {
            setStoreId(id);
        }
    }, [id]);
    return (
        <>
            <PanelTitle title={'Статистики:'} subTitle={'See your marketplaces statistics'}/>
            <OutletPanelScroll>
                <div className={s.statisticsContainer}>
                    <div className={s.selectMarketplace}>
                        <StatisticSelectMarketplace setStoreId={setStoreId} storeId={storeId}/>
                    </div>

                    <div className={s.stats1}>
                        <SendReadCommentCharBlock/>

                    </div>
                    <div className={s.stats2}>
                        <StatisticRatingChar storeId={storeId} mode={'store'}/>
                    </div>
                    <div className={s.stats3}>
                        <StatisticRatingChar storeId={storeId} mode={'local'}/>
                    </div>

                </div>
            </OutletPanelScroll>
        </>
    )
}
export default Statistics;
