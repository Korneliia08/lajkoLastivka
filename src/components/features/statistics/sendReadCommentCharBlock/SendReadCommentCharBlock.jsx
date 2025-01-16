import s from "./SendReadCommentCharBlock.module.scss";
import Block from "../../../ui/block/Block.jsx";
import BlockTitle from "../../../ui/block/blockTitle/BlockTitle.jsx";
import TrendIndicator from "../../../ui/trendIndicator/TrendIndicator.jsx";
import SendReadCommentChar from "./sendReadCommentChar/SendReadCommentChar.jsx";


const SendReadCommentCharBlock = ({...props}) => {
    return (
        <Block className={s.sendReadCommentCharBlockContainer}>
            <BlockTitle>Total orders</BlockTitle>
            <p className={s.text}>Messages status: <TrendIndicator/></p>
            <SendReadCommentChar/>

        </Block>
    )
}
export default SendReadCommentCharBlock;
