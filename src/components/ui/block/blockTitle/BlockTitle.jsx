import s from "./BlockTitle.module.scss";


const BlockTitle = ({children, className, ...props}) => {
    return (
        <div className={s.blockTitleContainer}>
            <h4>
                {children}
            </h4>
        </div>
    )
}
export default BlockTitle;
