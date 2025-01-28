import BlockTitle from "@/components/ui/block/blockTitle/BlockTitle.jsx";
import Block from "@/components/ui/block/Block.jsx";
import LikeUnlikeChar from "@/components/features/statistics/likeUnlikeCharBlock/likeUnlikeChar/LikeUnlikeChar.jsx";
import {FaSquare} from "react-icons/fa";

const StatisticRatingChar = ({mode, storeId, ...props}) => {
    const url = mode === 'local' ? `localOpinions/ratingScoreChar/${storeId}` : `opinions/ratingScoreChar/${storeId}`;
    const {data: ratingData} = useFetch(url, {
        default: [{rating1: 0, rating2: 0, rating3: 0, rating4: 0, rating5: 0}],
    });

    const data = [
        {name: '1', value: +ratingData[0].rating1},
        {name: '2', value: +ratingData[0].rating2},
        {name: '3', value: +ratingData[0].rating3},
        {name: '4', value: +ratingData[0].rating4},
        {name: '5', value: +ratingData[0].rating5},

    ];
    let color, title;
    if (mode === 'local') {
        color = ['#000d32', '#001f6b', '#0034a3', '#004de6', '#0066ff'];
        title = "In lajkolastivka system"

    } else {
        color = ['#130000', '#3e0b00', '#5c2f00', '#458400', '#00bc00'];
        title = "Rozetka marketplace"

    }
    const sum = data.reduce((acc, k) => acc + (+k.value), 0)
    return (
        <Block className={s.statisticRatingCharContainer}>
            <BlockTitle>{title}</BlockTitle>
            <p className={s.text}>{sum} ratings </p>
            <LikeUnlikeChar data={data} colors={color}/>
            <div className={s.legend}>
                <span>
                <FaSquare color={color[4]}/> 5 Likes
                </span>
                <span>
                <FaSquare color={color[3]}/>4 Likes
                </span>
                <span>
                <FaSquare color={color[2]}/>3 Likes
                </span>
                <span>
                <FaSquare color={color[1]}/>2 Likes
                </span>
                <span>
                <FaSquare color={color[0]}/>1 Likes
                </span>

            </div>
        </Block>
    )
}
export default StatisticRatingChar;
