import s from "./SubtitleInForm.module.scss";


const SubtitleInForm = ({title, describe, ...props}) => {
    return (
        <div className={s.subtitleInFormContainer}>
            <h4 className={s.title}>{title}</h4>
            <h5 className={s.title2}>{describe}</h5>
        </div>
    )
}
export default SubtitleInForm;
