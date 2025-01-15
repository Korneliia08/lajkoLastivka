import s from "./GeneralStatsCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import GeneralStatschar from "./generalStatschar/GeneralStatschar.jsx";
import Select from "react-select/base";
import TrendIndicator from "../../../ui/trendIndicator/TrendIndicator.jsx";

const options = [
    {value: 'chocolate', label: '30 days'},
    {value: 'strawberry', label: '90 days'},
    {value: 'vanilla', label: '364 days'}
]

const GeneralStatsCharBlock = (props) => {
    return (
        <Block className={s.generalStatsCharBlockContainer} rightPart={<Select options={options}/>}>
            <BlockTitle>Line unlike</BlockTitle>
            <div className={s.smallText}>Total earn</div>
            <div className={s.text}>
                Lorem impsum 5054, 1231 <TrendIndicator/>
            </div>
            <GeneralStatschar/>
        </Block>
    )
}
export default GeneralStatsCharBlock;
