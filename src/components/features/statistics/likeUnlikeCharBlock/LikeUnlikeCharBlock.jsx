import s from "./LikeUnlikeCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import LikeUnlikeChar from "./likeUnlikeChar/LikeUnlikeChar.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import { FaSquare } from "react-icons/fa";
import useFetch from "./../../../../hooks/useFetch.js";

const LikeUnlikeCharBlock = ({ type }) => {
  const { data: ratingData } = useFetch("dashboardPage/likesRate", {
    default: {
      local: [{ rating1: 0, rating2: 0, rating3: 0, rating4: 0, rating5: 0 }],
      rozetka: [{ rating1: 0, rating2: 0, rating3: 0, rating4: 0, rating5: 0 }],
    },
  });

  const tmpRatingData =
    type == "rozetka" ? ratingData.rozetka[0] : ratingData.local[0];

  const data = [
    { name: "1", value: +tmpRatingData.rating1 },
    { name: "2", value: +tmpRatingData.rating2 },
    { name: "3", value: +tmpRatingData.rating3 },
    { name: "4", value: +tmpRatingData.rating4 },
    { name: "5", value: +tmpRatingData.rating5 },
  ];
  console.log(tmpRatingData);
  let title = "";
  let color = [];
  if (type == "rozetka") {
    title = "Сума оцінок у системі Розетки";
    color = ["#F3E0E0", "#B3E7F9", "#70E2C8", "#62C1F8", "#A384FF"];
  } else {
    color = color = ["#E0BBF3", "#C1A3FF", "#A3D8F4", "#8EC5FC", "#F48FB1"];
    title = "Сума оцінок у системі FeedMP";
  }

  const sum = data.reduce((acc, k) => acc + +k.value, 0);
  return (
    <Block className={s.likeUnlikeCharBlockContainer}>
      <BlockTitle>{title}</BlockTitle>

      <p className={s.text}>Усього {sum} оцінок.</p>
      <LikeUnlikeChar data={data} colors={color} />
      <div className={s.legend}>
        <span>
          <FaSquare color={color[4]} />5 зірочок
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
    </Block>
  );
};
export default LikeUnlikeCharBlock;
