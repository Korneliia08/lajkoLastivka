import s from "./GeneralStatsCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import GeneralStatschar from "./generalStatschar/GeneralStatschar.jsx";
import useFetch from "@hooks/useFetch.js";

const options = [
    {value: 'chocolate', label: '30 days'},
    {value: 'strawberry', label: '90 days'},
    {value: 'vanilla', label: '364 days'}
]

const GeneralStatsCharBlock = (props) => {
    const {data: data} = useFetch('dashboardPage/dahsboardLineChartSummary', {
        default: undefined
    });
    console.log(data);
//rightPart={<Select options={options}/>}
    return (
        <Block className={s.generalStatsCharBlockContainer}>
            <BlockTitle>Statystyka marketplaeców</BlockTitle>
            <br/>
            {/*<div className={s.smallText}>Total earn</div>*/}
            {/*<div className={s.text}>*/}
            {/*    Lorem impsum 5054, 1231 <TrendIndicator/>*/}
            {/*</div>*/}
            {data && <GeneralStatschar data={data}/>}
        </Block>
    )
}
export default GeneralStatsCharBlock;
