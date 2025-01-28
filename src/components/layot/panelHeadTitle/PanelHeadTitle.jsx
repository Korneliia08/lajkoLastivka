import s from "./PanelHeadTitle.module.scss";
import PanelHeaderControls from "./panelHeaderControls/PanelHeaderControls.jsx";
import {PiBird} from "react-icons/pi";
import {GiCrownedHeart} from "react-icons/gi";


const PanelHeadTitle = ({title, text, ...props}) => {
    return (
        <div className={s.panelHeadTitleContainer}>
            <div className={s.leftPart}>
                <div className={s.icon}>
                    <PiBird className={s.iconBird}/>
                    <GiCrownedHeart className={s.iconHeart}/>
                </div>
                <div className={s.titles}>
                    <h4 className={s.title}>{title} </h4>
                    <span>{text} </span>
                </div>
            </div>
            <div className={s.controls}>
                <PanelHeaderControls/>
            </div>
        </div>
    )
}
export default PanelHeadTitle;
