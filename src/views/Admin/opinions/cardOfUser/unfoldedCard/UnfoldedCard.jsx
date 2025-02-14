import { useEffect, useRef, useState } from "react";
import s from "./UnfoldedCard.module.scss";
import FeedMpPart from "@/views/Admin/opinions/cardOfUser/unfoldedCard/feedMpPart/FeedMpPart.jsx";
import RozetkaPart from "@/views/Admin/opinions/cardOfUser/unfoldedCard/rozetkaPart/RozetkaPart.jsx";

const UnfoldedCard = ({ data, isOpen }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const localOpinion = data.order.items[0].localOpinion;
  const stars = localOpinion.ratingScore;
  const opinion = data.order.items[0].opinion;
  const feedMpComment = localOpinion;
  const rozetkaComment = opinion ? opinion : undefined;

  return (
    <div className={s.unfoldedCardContainer} style={{ height: `${height}px` }}>
      <div className={s.container} ref={contentRef}>
        {!feedMpComment && rozetkaComment && stars <= 3 && (
          <div className={s.block}>
            <h4 className={s.title}>FeedMp</h4>
            <p className={s.comment}>
              Покупець не залишив відгук на feedMP, але залишив все таки на
              розетці
            </p>
          </div>
        )}

        {!feedMpComment && !rozetkaComment ? (
          <div className={s.block}>
            <h4 className={s.title}>FeedMp</h4>
            <p className={s.comment}>Покупець не залишив відгук</p>
          </div>
        ) : (
          <>
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
    </div>
  );
};

export default UnfoldedCard;
