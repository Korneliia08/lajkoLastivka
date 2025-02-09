import s from "./MarketplacesOrdersCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import TrendIndicator from "../../../ui/trendIndicator/TrendIndicator.jsx";
import MarketplacesOrdersChar from "./marketplacesOrdersChar/MarketplacesOrdersChar.jsx";
import useFetch from "./../../../../hooks/useFetch.js";

const MarketplacesOrdersCharBlock = ({ ...props }) => {
  const { data } = useFetch("stores/allSaleChar", {
    default: undefined,
  });
  if (!data) return;
  return (
    <Block className={s.marketplacesOrdersCharBlockContainer}>
      <BlockTitle>Сума замовлень</BlockTitle>
      <p className={s.text}>
        {data.stores.reduce((acc, obj) => acc + obj.count, 0)} замовлень{" "}
        <TrendIndicator value={data.global.trend} />
      </p>
      <MarketplacesOrdersChar data={data.stores} />
    </Block>
  );
};
export default MarketplacesOrdersCharBlock;
