import s from "./PageFilterComment.module.scss";
import {useParams} from "react-router-dom";
import api from "../../../../providers/interceptors/refreshToken.interceptor.js";
import {useRef} from "react";


const PageFilterComment = ({setStage}) => {
    const {orderId, itemId} = useParams()
    const commentRef = useRef(null)

    async function sendComment(ev) {
        ev.preventDefault()
        try {
            const res = await api.post('/opinions/setOpinion/' + orderId + '/' + itemId, {comment: commentRef.current.value})
            if (res.data.code == 5) {
                alert('już ocenione')
                return
            }
            setStage('done')

        } catch (err) {
            console.log(err);
            return
        }

    }

    return (
        <div className={s.pageFilterCommentContainer}>
            <form onSubmit={sendComment}>
                <h3>Kurcza pała jak to się stało </h3>

                <h4>Opowiadaj co się tobie nie spodobało</h4>
                <input ref={commentRef} placeholder={'Co się stało ?'}/>
                <button type={"submit"}>Wyślij</button>
            </form>
        </div>
    )
}
export default PageFilterComment;
