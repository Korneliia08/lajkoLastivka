import s from "./UnfoldedCard.module.scss";
import FeedMpPart from "@/views/Admin/opinions/cardOfUser/unfoldedCard/feedMpPart/FeedMpPart.jsx";
import RozetkaPart from "@/views/Admin/opinions/cardOfUser/unfoldedCard/rozetkaPart/RozetkaPart.jsx";

const UnfoldedCard = ({ data, ...props }) => {
  const localOpinion = data.order.items[0].localOpinion;
  const stars = localOpinion.ratingScore;
  const opinion = data.order.items[0].opinion;

  const feedMpComment = localOpinion;
  const rozetkaComment = opinion ? opinion : undefined;
  return (
    <div className={s.unfoldedCardContainer}>
      {!feedMpComment && rozetkaComment && stars <= 3 && (
        <div className={s.block}>
          <h4 className={s.title}>FeedMp</h4>
          <p className={s.comment}>
            Покупець не залишив відгук на feedMP, але залишив все таки на
            розетці
          </p>
        </div>
      )}
      {/*// to gdy 1-3 revievs, ale na feedMP nie zostawiono opinii,ale na rozetce juz zostawione*/}

      {!feedMpComment && !rozetkaComment ? (
        <div className={s.block}>
          <h4 className={s.title}>FeedMp</h4>
          <p className={s.comment}>Покупець не залишив відгук</p>
        </div>
      ) : (
        <>
          {/*to gdy 1-3 revievs, ale na feedMP i  rozetce  nie zostawiono opinii*/}
          {stars <= 3 && (
            <FeedMpPart
              feedMpComment={feedMpComment}
              rozetkaComment={rozetkaComment}
            />
          )}
          <RozetkaPart stars={stars} rozetkaComment={rozetkaComment} />
        </>
      )}
    </div>
  );
};
export default UnfoldedCard;
