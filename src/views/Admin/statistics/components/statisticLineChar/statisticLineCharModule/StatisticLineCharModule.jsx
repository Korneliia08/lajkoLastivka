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
import { colors } from "@/data/colors.js";

const StatisticLineCharModule = ({ data, selectedOption }) => {
  const [dataLocal, setDataLocal] = useState([]);
  const [h, setH] = useState(15);

  useEffect(() => {
    const filteredData = data.map((item) => {
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
      if (key !== "day")
        lines.push(
          <Line
            key={key}
            strokeWidth={3}
            type="monotone"
            dot={false}
            dataKey={key}
            stroke={colors[index % colors.length]}
          />,
        );
    });
  }

  return (
    <div style={{ width: "100%", height: 250 }}>
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
