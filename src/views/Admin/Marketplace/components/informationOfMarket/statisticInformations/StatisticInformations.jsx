import s from "./StatisticInformations.module.scss";
import InfoTile from "../../../../../../components/ui/statisitc/infoTile/InfoTile.jsx";
import {CgMail, CgRead} from "react-icons/cg";
import {GiClick} from "react-icons/gi";
import useFetch from "../../../../../../functions/useFetch.js";
import {blockStatsInitialData} from "../../../../dashboard/blockStatsInitialData.js";


const StatisticInformations = ({...props}) => {

    const {data, loading} = useFetch('dashboardPage/BlockData', {
        default: blockStatsInitialData
    });
    return (
        <div className={s.statisticInformationsContainer}>
            <InfoTile icon={<CgMail/>} value={data.sendInMonth.current} secondValue={data.sendInMonth.change} title={'Send messages'}/>
            <InfoTile icon={<CgRead/>} value={data.readInMonth.current} secondValue={data.readInMonth.change} title={'Read messages'}
                      secondValueColor={'red'}/>
            <InfoTile icon={<GiClick/>} value={data.clickInMonth.current} secondValue={data.clickInMonth.change} title={'Click messages'}
                      secondValueColor={'red'}/>
            <InfoTile title={'Write comment'}/>
        </div>
    )
}
export default StatisticInformations;
