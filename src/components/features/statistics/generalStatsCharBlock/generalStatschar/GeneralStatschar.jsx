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
import { useEffect, useState } from "react";

const GeneralStatschar = ({ data }) => {
  const [h, setH] = useState(15);

  useEffect(() => {
    let max = 2;
    data.forEach((day) => {
      // if (Number(day.total_orders) > max) {
      //   max = day.total_orders;
      // }
      if (Number(day.total_send_messages) > max) {
        max = day.total_send_messages;
      }
      if (Number(day.total_read_messages) > max) {
        max = day.total_read_messages;
      }
      if (Number(day.total_opinions) > max) {
        max = day.total_opinions;
      }
      if (Number(day.average_rating) > max) {
        max = day.average_rating;
      }
      if (Number(day.totalHighLocalRating) > max) {
        max = day.totalHighLocalRating;
      }
      if (Number(day.totalLowLocalRating) > max) {
        max = day.totalLowLocalRating;
      }
    });
    setH(Math.ceil(max * 1.1));
  }, [data]);
  data.forEach((obj) => {
    // obj["Сума замовлень"] = obj["total_orders"];
    obj["Прочитані повідомлення"] = obj["total_read_messages"];
    obj["Написані відгуки"] = obj["total_opinions"];
    obj["Середня оцінка на розетці"] = obj["average_rating"];
    obj["Сума оцінок (1-3 зірочок)"] = obj["totalLowLocalRating"];
    obj["Сума оцінок (4-5 зірочок)"] = obj["totalHighLocalRating"];
    obj["Надіслані повідомлення"] = obj["total_send_messages"];
  });
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis type="number" domain={["auto", +h]} />
          <Tooltip />
          <Legend />

          {/*<Line*/}
          {/*  strokeWidth={3}*/}
          {/*  type="monotone"*/}
          {/*  dot={false}*/}
          {/*  dataKey="Сума замовлень"*/}
          {/*  stroke="#8884d8"*/}
          {/*/>*/}
          <Line
            strokeWidth={3}
            type="monotone"
            dot={false}
            dataKey="Прочитані повідомлення"
            stroke="#82ca9d"
          />
          <Line
            strokeWidth={3}
            type="monotone"
            dot={false}
            dataKey="Написані відгуки"
            stroke="#883a81"
          />
          <Line
            strokeWidth={3}
            type="monotone"
            dot={false}
            dataKey="Середня оцінка на розетці"
            stroke="#318881"
          />
          <Line
            strokeWidth={3}
            type="monotone"
            dot={false}
            dataKey="Сума оцінок (1-3 зірочок)"
            stroke="#3f88f1"
          />
          <Line
            strokeWidth={3}
            type="monotone"
            dot={false}
            dataKey="Сума оцінок (4-5 зірочок)"
            stroke="#558861"
          />
          <Line
            strokeWidth={3}
            type="monotone"
            dot={false}
            dataKey="Надіслані повідомлення"
            stroke="#ff7777"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GeneralStatschar;
