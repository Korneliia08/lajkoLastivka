import s from "./LikeUnlikeCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import LikeUnlikeChar from "./likeUnlikeChar/LikeUnlikeChar.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import {FaSquare} from "react-icons/fa";
import useFetch from "./../../../../hooks/useFetch.js";


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
    const color = ['#F2D1D1', '#A2DFF7', '#60DDBF', '#51B2F6', '#9170FF',];
    const sum = data.reduce((acc, k) => acc + (+k.value), 0)
    return (
        <Block className={s.likeUnlikeCharBlockContainer}>
            <BlockTitle>Сума відгуків у системі Розетки</BlockTitle>
            <p className={s.text}>{sum} зірочок </p>
            <LikeUnlikeChar data={data} colors={color}/>
            <div className={s.legend}>
                <span>
                <FaSquare color={color[4]}/>5 зірочок
                </span>
                <span>
                <FaSquare color={color[3]}/>4 зірочок
                </span>
                <span>
                <FaSquare color={color[2]}/>3 зірочок
                </span>
                <span>
                <FaSquare color={color[1]}/>2 зірочок
                </span>
                <span>
                <FaSquare color={color[0]}/>1 зірочка
                </span>

            </div>
        </Block>
    )
}
export default LikeUnlikeCharBlock;
