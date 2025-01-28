import s from "./StatisticLineChar.module.scss";
import useFetch from "@hooks/useFetch.js";
import Block from "@/components/ui/block/Block.jsx";
import BlockTitle from "@/components/ui/block/blockTitle/BlockTitle.jsx";
import GeneralStatschar from "@/components/features/statistics/generalStatsCharBlock/generalStatschar/GeneralStatschar.jsx";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";
import StatisticLineCharModule from "@/views/Admin/statistics/components/statisticLineChar/statisticLineCharModule/StatisticLineCharModule.jsx";

const options = [
  { value: "newOrders", label: "New orders" },
  { value: "readMessages", label: "Read messages" },
  { value: "clickMessages", label: "Click messages" },
  { value: "writeMessages", label: "Write reviews" },
  { value: "avgLocalRating", label: "AVG lajkolastivka rating" },
  { value: "avgStoreRating", label: "AVG rozetka rating" },
];
const StatisticLineChar = ({ ...props }) => {
  const { id } = useParams();
  const [selectedOption, setSelectedOptions] = useState([]);
  const { data: data } = useFetch("statisticPage/lineChartSummary/" + id, {
    default: undefined,
  });

  //rightPart={<Select options={options}/>}
  return (
    <Block className={s.statisticLineCharContainer}>
      <BlockTitle>Statystyka marketplaeców</BlockTitle>
      <br />
      {/*<div className={s.smallText}>Total earn</div>*/}
      {/*<div className={s.text}>*/}
      {/*    Lorem impsum 5054, 1231 <TrendIndicator/>*/}
      {/*</div>*/}
      <StatisticLineCharModule />
      {data && <GeneralStatschar data={data} />}
      <Select
        defaultValue={[options[0], options[1]]}
        isMulti
        options={options}
        onChange={(k) => console.log(k)}
        closeMenuOnSelect={false}
      />
    </Block>
  );
};
export default StatisticLineChar;
