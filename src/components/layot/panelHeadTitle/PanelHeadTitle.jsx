import s from "./PanelHeadTitle.module.scss";
import {MdDashboard} from "react-icons/md";
import PanelHeaderControls from "./panelHeaderControls/PanelHeaderControls.jsx";


const PanelHeadTitle = ({title, text, ...props}) => {
    return (
        <div className={s.panelHeadTitleContainer}>
            <div className={s.leftPart}>

                <div className={s.icon}>
                    <MdDashboard/>
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
