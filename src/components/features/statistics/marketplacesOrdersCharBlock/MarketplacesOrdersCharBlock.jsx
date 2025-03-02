import s from "./MarketplacesOrdersCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import useFetch from "./../../../../hooks/useFetch.js";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PureComponent, useEffect, useRef, useState } from "react";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;
    const words = payload.value.split(" ");
    return (
      <g transform={`translate(${x},${y})`}>
        {words.map((word, index) => (
          <text
            key={index}
            x={0}
            y={index * 12}
            dy={16}
            textAnchor="middle"
            fontSize={12}
            fill="#555"
          >
            {word}
          </text>
        ))}
      </g>
    );
  }
}

const MarketplacesOrdersCharBlock = ({ ...props }) => {
  const { data } = useFetch("dashboardPage/storesLocalAndRozetkaOpinionsAvg", {
    default: [],
  });

  // Hooki muszą być na początku
  const chartRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (chartRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (chartRef.current) {
          setContainerWidth(chartRef.current.offsetWidth);
        }
      });
      resizeObserver.observe(chartRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  if (!data || data.length === 0) return null;

  const charData = data.map((obj) => ({
    name: obj.store?.name.trim() || "Unknown",
    FeedMP: (+obj.localAvg ?? 0).toFixed(2),
    Rozetka: (+obj.rozetkaAvg ?? 0).toFixed(2),
  }));

  // Zakładamy, że dla każdej kategorii mamy 2 bary
  const totalBars = charData.length * 2;
  // Obliczamy dynamicznie barSize na podstawie szerokości rodzica (przyjmujemy 95% dostępnej przestrzeni)
  const barSize = containerWidth ? (containerWidth * 0.95) / totalBars : 30;

  return (
    <Block className={s.marketplacesOrdersCharBlockContainer} ref={chartRef}>
      <BlockTitle>Сума замовлень</BlockTitle>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={charData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={<CustomizedAxisTick />} interval={0} />
          <YAxis
            domain={[0, 5]}
            ticks={[0, 1, 2, 3, 4, 5]}
            allowDecimals={false}
          />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} />
          <Bar dataKey="Rozetka" fill="#8884d8" barSize={barSize} />
          <Bar dataKey="FeedMP" fill="#82ca9d" barSize={barSize} />
        </BarChart>
      </ResponsiveContainer>
    </Block>
  );
};

export default MarketplacesOrdersCharBlock;
