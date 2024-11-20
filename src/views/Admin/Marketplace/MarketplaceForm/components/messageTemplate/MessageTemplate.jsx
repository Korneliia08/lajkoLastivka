import s from "./MessageTemplate.module.scss";
import EmojiPicker from "emoji-picker-react";


const MessageTemplate = (props) => {
    return (
        <div className={s.messageTemplateContainer}>
            <span className={s.title}>Шаблон повідомлення</span>
            <textarea className={s.areaForTemplate}></textarea>
            {/*<EmojiPicker open={false}/>*/}
            <EmojiPicker reactions={['🤣''1f600']} allowExpandReactions={true}/>

        </div>

    )
}
export default MessageTemplate;
