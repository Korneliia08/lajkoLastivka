import s from "./MarketplacesOrdersCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import TrendIndicator from "../../../ui/trendIndicator/TrendIndicator.jsx";
import MarketplacesOrdersChar from "./marketplacesOrdersChar/MarketplacesOrdersChar.jsx";


const MarketplacesOrdersCharBlock = ({...props}) => {
    return (
        <Block className={s.marketplacesOrdersCharBlockContainer}>
            <BlockTitle>Total orders</BlockTitle>
            <p className={s.text}>453 orders <TrendIndicator/></p>
            <MarketplacesOrdersChar/>

        </Block>
    )
}
export default MarketplacesOrdersCharBlock;
