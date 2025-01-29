import s from "./StatisticLineChar.module.scss";
import useFetch from "@hooks/useFetch.js";
import Block from "@/components/ui/block/Block.jsx";
import BlockTitle from "@/components/ui/block/blockTitle/BlockTitle.jsx";
import {useParams} from "react-router-dom";
import Select from "react-select";
import {useState} from "react";
import StatisticLineCharModule
    from "@/views/Admin/statistics/components/statisticLineChar/statisticLineCharModule/StatisticLineCharModule.jsx";

const daysOptions = [
    {value: "7", label: "7 днів"},
    {value: "30", label: "30 днів"},
    {value: "90", label: "90 днів"},
    {value: "180", label: "180 днів"},
    {value: "360", label: "360 днів"},
];
const options = [
    //todo translate
    {value: "newOrders", label: "Нові замовленні", variableLabel: "total_orders"},
    {
        value: "Read messages",
        label: "Прочитані повідомлення",
        variableLabel: "total_read_messages",
    },
    {
        value: "Click messages",
        label: "Відвідані посилання",
        variableLabel: "total_opinions",
    },
    {
        value: "Write reviews",
        label: "Написані відгуки на розетці",
        variableLabel: "average_rating",
    },

    {
        value: "lajkolastivka rating",
        label: "Написані відгуки на лайкоЛастівці",
        variableLabel: "totalLocalOpinions",
    },
    {
        value: "AVG lajkolastivka rating",
        label: "Середня оцінка на лайкоЛастівці",
        variableLabel: "averageLocalRating",
    },
    {
        value: "AVG rozetka rating",
        label: "Середня оцінка на розетці",
        variableLabel: "total_orders",
    },
];
const StatisticLineChar = ({...props}) => {
    const {id} = useParams();
    const [selectedOption, setSelectedOptions] = useState([
        options[0],
        options[1],
    ]);
    const [days, setDays] = useState(30);
    const {data: data} = useFetch(
        `statisticPage/lineChartSummary/${id}/${days}`,
        {
            default: undefined,
        },
    );

    //rightPart={<Select options={options}/>}
    return (
        <Block className={s.statisticLineCharContainer}>
            <Select
                defaultValue={[daysOptions[1]]}
                options={daysOptions}
                onChange={(k) => setDays(k.value)}
            />
            <br/>
            <BlockTitle>Лінійні діаграми</BlockTitle>
            <br/>
            {/*<div className={s.smallText}>Total earn</div>*/}
            {/*<div className={s.text}>*/}
            {/*    Lorem impsum 5054, 1231 <TrendIndicator/>*/}
            {/*</div>*/}
            {data && (
                <StatisticLineCharModule data={data} selectedOption={selectedOption}/>
            )}

            <Select
                defaultValue={[options[0], options[1]]}
                isMulti
                menuPlacement={"top"}
                options={options}
                onChange={(k) => setSelectedOptions(k)}
                closeMenuOnSelect={false}
            />
        </Block>
    );
};
export default StatisticLineChar;
