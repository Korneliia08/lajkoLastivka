import s from "./RozetkaPart.module.scss";
import { ImQuotesRight } from "react-icons/im";

const RozetkaPart = ({ stars, rozetkaComment, ...props }) => {
  return (
    <div className={s.rozetkaPartContainer}>
      {rozetkaComment && rozetkaComment.text && (
        <>
          <h4 className={s.title}>Розетка</h4>
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
