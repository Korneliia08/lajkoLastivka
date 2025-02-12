import s from "./FeedMpPart.module.scss";
import { ImQuotesRight } from "react-icons/im";

const FeedMpPart = ({ feedMpComment, rozetkaComment, ...props }) => {
  console.log(feedMpComment);
  return (
    <div className={s.feedMpPartContainer}>
      <div className={s.blockFeedMP}>
        {feedMpComment &&
          feedMpComment.opinion &&
          feedMpComment.opinion.length > 0 && (
            <>
              <h4 className={s.title}>FeedMp</h4>
              <p className={s.comment}>
                <ImQuotesRight className={s.quotesLeft} />
                {feedMpComment.opinion}
                <ImQuotesRight className={s.quotesRight} />
              </p>
            </>
          )}
        {
          (!feedMpComment && !rozetkaComment) ||
            (feedMpComment.opinion == null && (
              <>
                <h4 className={s.title}>FeedMp</h4>
                <p className={s.comment}>Покупець не залишив відгук</p>
              </>
            )) //to gdy 1-3 revievs, ale na feedMP   nie zostawiono opinii
        }
      </div>

      {/*<WithoutRozetka/>*/}
      {/*<WithRozetka/>*/}
    </div>
  );
};
export default FeedMpPart;
