import s from "./LoadImageFromComputer.module.scss";
import {IoImagesOutline} from "react-icons/io5";


const LoadImageFromComputer = ({title, describe, ...props}) => {
    return (
        <div className={s.block}>
            <div className={s.blockForIc}>
                <IoImagesOutline className={s.icStyle}/>
            </div>
            <div className={s.blockForContent}>
                <h5 className={s.title}>{title}</h5>
                <span className={s.describe}>{describe}</span>
            </div>
        </div>
    )
}
export default LoadImageFromComputer;
