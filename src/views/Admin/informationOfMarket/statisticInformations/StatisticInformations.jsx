import s from "./StatisticInformations.module.scss";
import InfoTile from "../../../../components/ui/statisitc/infoTile/InfoTile.jsx";
import {CgMail, CgRead} from "react-icons/cg";
import {GiClick} from "react-icons/gi";
import useFetch from "@hooks/useFetch.js";
import {blockStatsInitialData} from "../../dashboard/blockStatsInitialData.js";
import {useParams} from "react-router-dom";
import Block from "@/components/ui/block/Block.jsx";

const StatisticInformations = ({...props}) => {
    const {id} = useParams();
    const {data, loading} = useFetch(
        "informationOfMarketplacePage/BlockData/" + id,
        {
            default: blockStatsInitialData,
            autoRefresh: 20000,
        },
    );
    return (
        <Block className={s.statisticInformationsContainer}>
            <div className={s.topPanel}>
                <h5>Підсумковий звіт</h5>
                <h6>Підсумки за останній місяць</h6>
            </div>
            <div className={s.mainContainer}>
                <InfoTile
                    icon={<CgMail/>}
                    value={data.sendInMonth.current}
                    secondValue={data.sendInMonth.change}
                    title={"Надіслані повідомлення"}
                />
                <InfoTile
                    icon={<CgRead/>}
                    value={data.readInMonth.current}
                    secondValue={data.readInMonth.change}
                    title={"Прочитані повідомлення"}
                    secondValueColor={"red"}
                />
                <InfoTile
                    icon={<GiClick/>}
                    value={data.clickInMonth.current}
                    secondValue={data.clickInMonth.change}
                    title={"Посилання відвідано"}
                    secondValueColor={"red"}
                />
                <InfoTile
                    value={data.writeComment.current}
                    secondValue={data.writeComment.change}
                    title={"Написано відгуків"}
                />
            </div>
        </Block>
    );
};
export default StatisticInformations;
