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
    color: "rgb(0 143 255)",
  },
  {
    value: "Сума оцінок (1-3 зірочок)",
    label: "Сума оцінок (1-3 зірочок)",
    variableLabel: "totalLowLocalRating",
    color: "rgb(178, 34, 34)",
  },
  {
    value: "Сума оцінок (4-5 зірочок)",
    label: "Сума оцінок (4-5 зірочок)",
    variableLabel: "totalHighLocalRating",
    color: "rgb(0 114 15)",
  },
  {
    value: "Прочитані повідомлення", // przeczytane powiadomienia
    label: "Прочитані повідомлення",
    variableLabel: "total_read_messages",
    color: colors[4 % colors.length],
  },
  {
    value: "Відвідані посилання", //odwiedzione linki
    label: "Відвідані посилання",
    variableLabel: "total_clicked_link",
    color: colors[5 % colors.length],
  },
  {
    value: "Написані відгуки на розетці", //napisane opinie na rozetce
    label: "Написані відгуки на розетці",
    variableLabel: "total_opinions",
    color: colors[6 % colors.length],
  },

  {
    value: "Написані відгуки на FeedMP",
    label: "Написані відгуки на FeedMP",
    variableLabel: "totalLocalOpinions",
    color: colors["rgb(255,0,222)"],
  },
  {
    value: "Середня оцінка на FeedMP",
    label: "Середня оцінка на FeedMP",
    variableLabel: "averageLocalRating",
    color: colors[8 % colors.length],
  },
  // {
  //   value: "Середня оцінка на розетці", //suma opini na rozetka
  //   label: "Середня оцінка на розетці",
  //   variableLabel: "totalOpinions",
  //   color: colors[9 % colors.length],
  // },
  {
    value: "Відправлені запити", //wysłane wiadomości
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
