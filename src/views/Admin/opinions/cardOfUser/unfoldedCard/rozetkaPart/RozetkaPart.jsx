import s from "./RozetkaPart.module.scss";
import { ImQuotesRight } from "react-icons/im";
import { PiStarFill } from "react-icons/pi";
import cn from "@/functions/cn.js";

const RozetkaPart = ({ stars, rozetkaComment, ...props }) => {
  return (
    <div className={s.rozetkaPartContainer}>
      {rozetkaComment && rozetkaComment.text && (
        <>
          <h4 className={s.title}>
            Розетка{" "}
            <div className={s.blockForReviews}>
              {Array.from(Array(rozetkaComment.ratingScore).keys()).map(
                (key) => {
                  return (
                    <PiStarFill
                      key={key}
                      className={cn(
                        s.review,
                        s["r" + rozetkaComment.ratingScore],
                      )}
                    />
                  );
                },
              )}
            </div>
          </h4>

          <p className={s.comment}>
            <ImQuotesRight className={s.quotesLeft} />
            {rozetkaComment.text}
            <ImQuotesRight className={s.quotesRight} />
          </p>
        </>
      )}
      {
        !rozetkaComment && stars >= 4 && (
          <>
            <h4 className={s.title}>Розетка</h4>
            <p className={s.comment}>Покупець не залишив відгук</p>
          </>
        )
        // to gdy 4-5 revievs, ale na rozetce nie zostawiono opinii
      }
    </div>
  );
};
export default RozetkaPart;
