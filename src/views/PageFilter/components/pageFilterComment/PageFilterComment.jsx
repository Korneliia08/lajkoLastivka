import style from "./PageFilterComment.module.scss";
import { useParams } from "react-router-dom";
import api from "../../../../providers/interceptors/refreshToken.interceptor.js";
import { useRef, useState } from "react";

const PageFilterComment = ({ setStage }) => {
  const { secretId } = useParams();
  const commentRef = useRef(null);
  const [isLoading, setLoading] = useState(false);

  async function sendComment(ev) {
    ev.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/localOpinions/setOpinion/" + secretId, {
        comment: commentRef.current.value,
      });
      // if (res.data.code == 5) {
      //     alert('już ocenione')
      //     return
      // }
      setStage("done");
    } catch (err) {
      console.log(err);
      return;
    }
    setLoading(false);
  }

  return (
    <div className={style.pageFilterCommentContainer}>
      <form onSubmit={sendComment}>
        <h3 className={style.title}>Допоможіть нам стати кращими!</h3>
        <h4 className={style.questionContent}>
          Не зовсім враження на всі 5? Чому? 🤔
        </h4>
        <textarea
          ref={commentRef}
          placeholder={"Що трапилось?"}
          className={style.textArea}
        />
        <button disabled={isLoading} type={"submit"} className={style.btnSend}>
          Надіслати
        </button>
      </form>
    </div>
  );
};
export default PageFilterComment;
