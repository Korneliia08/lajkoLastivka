import s from "./StatisticLineChar.module.scss";
import useFetch from "@hooks/useFetch.js";
import Block from "@/components/ui/block/Block.jsx";
import BlockTitle from "@/components/ui/block/blockTitle/BlockTitle.jsx";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";
import StatisticLineCharModule from "@/views/Admin/statistics/components/statisticLineChar/statisticLineCharModule/StatisticLineCharModule.jsx";

const daysOptions = [
  { value: "7", label: "7 days" },
  { value: "30", label: "30 days" },
  { value: "90", label: "90 days" },
  { value: "180", label: "180 days" },
  { value: "360", label: "360 days" },
];
const options = [
  //todo translate
  { value: "newOrders", label: "New orders", variableLabel: "total_orders" },
  {
    value: "Read messages",
    label: "Read messages",
    variableLabel: "total_read_messages",
  },
  {
    value: "Click messages",
    label: "Click messages",
    variableLabel: "total_opinions",
  },
  {
    value: "Write reviews",
    label: "Write reviews",
    variableLabel: "average_rating",
  },

  {
    value: "lajkolastivka rating",
    label: "lajkolastivka rating",
    variableLabel: "totalLocalOpinions",
  },
  {
    value: "AVG lajkolastivka rating",
    label: "AVG lajkolastivka rating",
    variableLabel: "averageLocalRating",
  },
  {
    value: "AVG rozetka rating",
    label: "AVG rozetka rating",
    variableLabel: "total_orders",
  },
];
const StatisticLineChar = ({ ...props }) => {
  const { id } = useParams();
  const [selectedOption, setSelectedOptions] = useState([
    options[0],
    options[1],
  ]);
  const [days, setDays] = useState(30);
  const { data: data } = useFetch(
    `statisticPage/lineChartSummary/${id}/${days}`,
    {
      default: undefined,
    },
  );

  //rightPart={<Select options={options}/>}
  return (
    <Block className={s.statisticLineCharContainer}>
      <Select
        defaultValue={[daysOptions[1]]}
        options={daysOptions}
        onChange={(k) => setDays(k.value)}
      />
      <BlockTitle>Statystyka marketplaeców</BlockTitle>
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
