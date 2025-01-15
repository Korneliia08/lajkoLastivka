import s from "./LikeUnlikeCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import LikeUnlikeChar from "./likeUnlikeChar/LikeUnlikeChar.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import TrendIndicator from "../../../ui/trendIndicator/TrendIndicator.jsx";
import {FaSquare} from "react-icons/fa";


const LikeUnlikeCharBlock = (props) => {
    return (
        <Block className={s.likeUnlikeCharBlockContainer}>
            <BlockTitle>Line unlike</BlockTitle>
            <p className={s.text}>453 Likes <TrendIndicator/></p>
            <LikeUnlikeChar/>
            <div className={s.legend}>
                <span>
                <FaSquare color={'blue'}/> Likes
                </span>
                <span>
                <FaSquare color={'orange'}/> Unlikes
                </span>

            </div>
        </Block>
    )
}
export default LikeUnlikeCharBlock;
