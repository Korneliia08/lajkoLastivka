import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StatisticLineCharModule = ({ data, selectedOption }) => {
  const [dataLocal, setDataLocal] = useState([]);
  const [h, setH] = useState(15);

  useEffect(() => {
    const filteredData = data.map((item, index) => {
      let filteredItem = {};
      selectedOption.forEach((key) => {
        if (item.hasOwnProperty(key.variableLabel)) {
          filteredItem[key.value] = item[key.variableLabel];
        }
        filteredItem["day"] = item["day"];
      });
      return filteredItem;
    });

    let max = 2;
    filteredData.forEach((day) => {
      Object.values(day).forEach((value) => {
        if (Number(value) > max) {
          max = Number(value);
        }
      });
    });

    setDataLocal(filteredData);
    setH(max);
  }, [data, selectedOption]);
  const lines = [];
  if (dataLocal.length > 0) {
    Object.keys(dataLocal[0]).forEach((key, index) => {
      if (key !== "day") {
        const find = selectedOption.find((k) => k.value == key);
        const color = find ? find.color : "blue";

        lines.push(
          <Line
            key={key}
            strokeWidth={3}
            type="monotone"
            dot={false}
            dataKey={key}
            stroke={color}
          />,
        );
      }
    });
  }

  return (
    <div
      style={{ width: "calc(100% + 40px)", height: 250, marginLeft: "-40px" }}
    >
      <ResponsiveContainer>
        <LineChart data={dataLocal}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis type="number" domain={["auto", +h]} />
          <Tooltip />
          <Legend />
          {lines}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticLineCharModule;
