import s from "./MarketplacesOrdersCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import TrendIndicator from "../../../ui/trendIndicator/TrendIndicator.jsx";
import MarketplacesOrdersChar from "./marketplacesOrdersChar/MarketplacesOrdersChar.jsx";
import useFetch from "../../../../functions/useFetch.js";


const MarketplacesOrdersCharBlock = ({...props}) => {
    const {data} = useFetch('stores/allSaleChar', {
        default: [],
    });
    return (
        <Block className={s.marketplacesOrdersCharBlockContainer}>
            <BlockTitle>Total orders</BlockTitle>
            <p className={s.text}>453 orders <TrendIndicator/></p>
            <MarketplacesOrdersChar data={data}/>

        </Block>
    )
}
export default MarketplacesOrdersCharBlock;
