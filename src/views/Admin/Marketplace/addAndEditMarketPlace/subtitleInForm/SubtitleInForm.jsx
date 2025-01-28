import s from "./SubtitleInForm.module.scss";


const SubtitleInForm = ({...props}) => {
    return (
        <div className={s.subtitleInFormContainer}>
            <h4 className={s.title}>Основні інформації</h4>
            <h5 className={s.title2}>Введіть ключові дані про свій магазин</h5>
        </div>
    )
}
export default SubtitleInForm;
