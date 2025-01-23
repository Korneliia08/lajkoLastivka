import s from "./LikeUnlikeCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import LikeUnlikeChar from "./likeUnlikeChar/LikeUnlikeChar.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import {FaSquare} from "react-icons/fa";
import useFetch from "../../../../functions/useFetch.js";


const LikeUnlikeCharBlock = (props) => {
    const {data: ratingData} = useFetch('dashboardPage/likesRate', {
        default: [{rating1: 0, rating2: 0, rating3: 0, rating4: 0, rating5: 0}],
    });

    const data = [
        {name: '1', value: +ratingData[0].rating1},
        {name: '2', value: +ratingData[0].rating2},
        {name: '3', value: +ratingData[0].rating3},
        {name: '4', value: +ratingData[0].rating4},
        {name: '5', value: +ratingData[0].rating5},

    ];
    const color = ['#009f00', '#00ff61', '#006ed6', 'red', 'black'];
    const sum = data.reduce((acc, k) => acc + (+k.value), 0)
    return (
        <Block className={s.likeUnlikeCharBlockContainer}>
            <BlockTitle>Line unlike</BlockTitle>
            <p className={s.text}>{sum} Likes </p>
            <LikeUnlikeChar data={data} colors={color}/>
            <div className={s.legend}>
                <span>
                <FaSquare color={color[0]}/> 5 Likes
                </span>
                <span>
                <FaSquare color={color[1]}/>4 Likes
                </span>
                <span>
                <FaSquare color={color[2]}/>3 Likes
                </span>
                <span>
                <FaSquare color={color[3]}/>2 Likes
                </span>
                <span>
                <FaSquare color={color[4]}/>1 Likes
                </span>

            </div>
        </Block>
    )
}
export default LikeUnlikeCharBlock;
