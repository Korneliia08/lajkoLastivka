import s from "./MessageTemplate.module.scss";

import {useState} from "react";


const MessageTemplate = ({textRef}) => {

    const [emojiPanelOpen, setEmojiPanelOpen] = useState(true)

    function handleEmojiSelect(ev) {
        setEmojiPanelOpen(false)
        //   textReff.current.value += ev.emoji
    }

    return (
        <div className={s.messageTemplateContainer}>
            <span className={s.title}>Шаблон повідомлення</span>

            <textarea required={true} ref={textRef} className={s.areaForTemplate}></textarea>
            <span className={s.description}>[store], [product], [link]</span>
        </div>

    )
}
export default MessageTemplate;
