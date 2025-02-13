import style from "./PageFilterComment.module.scss";
import { useParams } from "react-router-dom";
import api from "../../../../providers/interceptors/refreshToken.interceptor.js";
import { useRef, useState } from "react";

const PageFilterComment = ({ isPrev, setStage }) => {
  const { secretId } = useParams();
  const commentRef = useRef(null);
  const [isLoading, setLoading] = useState(false);

  async function sendComment(ev) {
    ev.preventDefault();
    if (isPrev()) {
      setStage("done");
      setTimeout(() => {
        setStage("stars");
      }, 5000);
      return;
    }
    setLoading(true);
    try {
      const res = await api.post("/localOpinions/setOpinion/" + secretId, {
        comment: commentRef.current.value,
      });
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
        <h4 className={style.questionContent}>Дякуємо за чесну оцінку</h4>

        <div className={style.blockForTextArea}>
          {/*<h5 className={style.title}>Що можна покращити?</h5>*/}
          <p className={style.content}>
            Підкажіть, будь ласка, що ми можемо покращити?
          </p>
          <textarea ref={commentRef} className={style.textArea} />
        </div>
        <div className={style.blockForBtn}>
          <button
            disabled={isLoading}
            type={"submit"}
            className={style.btnSend}
          >
            Надіслати
          </button>
        </div>
      </form>
    </div>
  );
};
export default PageFilterComment;
