import BlockTitle from "@/components/ui/block/blockTitle/BlockTitle.jsx";
import Block from "@/components/ui/block/Block.jsx";
import LikeUnlikeChar from "@/components/features/statistics/likeUnlikeCharBlock/likeUnlikeChar/LikeUnlikeChar.jsx";
import { FaSquare } from "react-icons/fa";
import useFetch from "@hooks/useFetch.js";
import s from "./StatisticRatingChar.module.scss";

const StatisticRatingChar = ({ mode, storeId, ...props }) => {
  const url =
    mode === "local"
      ? `localOpinions/ratingScoreChar/${storeId}`
      : `opinions/ratingScoreChar/${storeId}`;
  const { data: ratingData } = useFetch(url, {
    default: [{ rating1: 0, rating2: 0, rating3: 0, rating4: 0, rating5: 0 }],
  });

  const data = [
    { name: "1", value: +ratingData[0].rating1 },
    { name: "2", value: +ratingData[0].rating2 },
    { name: "3", value: +ratingData[0].rating3 },
    { name: "4", value: +ratingData[0].rating4 },
    { name: "5", value: +ratingData[0].rating5 },
  ];
  let color, title;
  if (mode === "local") {
    color = ["#E0BBF3", "#C1A3FF", "#A3D8F4", "#8EC5FC", "#F48FB1"];
    title = "Сума відгуків у системі ЛайкоЛастівка";
  } else {
    color = ["#F3E0E0", "#B3E7F9", "#70E2C8", "#62C1F8", "#A384FF"];

    title = "Сума відгуків у системі Розетки";
  }
  const sum = data.reduce((acc, k) => acc + +k.value, 0);
  return (
    <Block className={s.statisticRatingCharContainer}>
      <BlockTitle>{title}</BlockTitle>
      {/*//todo translate*/}
      <div className={s.container}>
        <div className={s.left}>
          <p className={s.text}>{sum} зірочок </p>

          <LikeUnlikeChar
            maxHeight={160}
            maxWidth={240}
            data={data}
            colors={color}
          />
        </div>
        <div className={s.legend}>
          <span>
            {/*//todo translate*/}
            <FaSquare color={color[4]} /> 5 зірочок
          </span>
          <span>
            <FaSquare color={color[3]} />4 зірочок
          </span>
          <span>
            <FaSquare color={color[2]} />3 зірочок
          </span>
          <span>
            <FaSquare color={color[1]} />2 зірочок
          </span>
          <span>
            <FaSquare color={color[0]} />1 зірочка
          </span>
        </div>
      </div>
    </Block>
  );
};
export default StatisticRatingChar;
