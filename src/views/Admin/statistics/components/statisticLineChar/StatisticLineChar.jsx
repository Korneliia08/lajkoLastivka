import s from "./StatisticLineChar.module.scss";
import useFetch from "@hooks/useFetch.js";
import Block from "@/components/ui/block/Block.jsx";
import BlockTitle from "@/components/ui/block/blockTitle/BlockTitle.jsx";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";
import StatisticLineCharModule from "@/views/Admin/statistics/components/statisticLineChar/statisticLineCharModule/StatisticLineCharModule.jsx";
import { colors } from "@/data/colors.js";
import { useSelector } from "react-redux";

const options = [
  {
    value: "Нові замовленні",
    label: "Нові замовленні",
    variableLabel: "total_orders",
    color: colors[1 % colors.length],
  },
  {
    value: "Сума оцінок (1-3 зірочок)",
    label: "Сума оцінок (1-3 зірочок)",
    variableLabel: "totalLowLocalRating",
    color: colors[2 % colors.length],
  },
  {
    value: "Сума оцінок (4-5 зірочок)",
    label: "Сума оцінок (4-5 зірочок)",
    variableLabel: "totalHighLocalRating",
    color: colors[3 % colors.length],
  },
  {
    value: "Прочитані повідомлення",
    label: "Прочитані повідомлення",
    variableLabel: "total_read_messages",
    color: colors[4 % colors.length],
  },
  {
    value: "Відвідані посилання",
    label: "Відвідані посилання",
    variableLabel: "total_opinions",
    color: colors[5 % colors.length],
  },
  {
    value: "Написані відгуки на розетці",
    label: "Написані відгуки на розетці",
    variableLabel: "average_rating",
    color: colors[6 % colors.length],
  },

  {
    value: "Написані відгуки на FeedMP",
    label: "Написані відгуки на FeedMP",
    variableLabel: "totalLocalOpinions",
    color: colors[7 % colors.length],
  },
  {
    value: "Середня оцінка на FeedMP",
    label: "Середня оцінка на FeedMP",
    variableLabel: "averageLocalRating",
    color: colors[8 % colors.length],
  },
  {
    value: "Середня оцінка на розетці",
    label: "Середня оцінка на розетці",
    variableLabel: "total_orders",
    color: colors[9 % colors.length],
  },
  {
    value: "Відправлені запити",
    label: "Відправлені запити",
    variableLabel: "total_send_messages",
    color: colors[10 % colors.length],
  },
];
const StatisticLineChar = ({ ...props }) => {
  const { id } = useParams();
  const [selectedOption, setSelectedOptions] = useState([
    options[0],
    options[1],
  ]);

  const startTime = useSelector((state) => state.statistics.startTime);
  const endTime = useSelector((state) => state.statistics.endTime);
  const [days, setDays] = useState(30);
  const { data: data } = useFetch(
    `statisticPage/lineChartSummary/${id}/?startTime=${startTime}&endTime=${endTime}&k=1`,
    {
      default: undefined,
    },
  );

  //rightPart={<Select options={options}/>}
  return (
    <Block className={s.statisticLineCharContainer}>
      <br />
      <BlockTitle>Лінійні діаграми</BlockTitle>
      <br />
      {/*<div className={s.smallText}>Total earn</div>*/}
      {/*<div className={s.text}>*/}
      {/*    Lorem impsum 5054, 1231 <TrendIndicator/>*/}
      {/*</div>*/}
      {data && (
        <StatisticLineCharModule data={data} selectedOption={selectedOption} />
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
