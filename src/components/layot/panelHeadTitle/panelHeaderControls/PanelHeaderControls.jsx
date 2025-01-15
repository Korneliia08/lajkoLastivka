import s from "./PanelHeaderControls.module.scss";
import {BiBell} from "react-icons/bi";


const PanelHeaderControls = (props) => {
    return (
        <div className={s.panelHeaderControlsContainer}>
            <div className={s.circle}>
                <BiBell/>

            </div>
            <div className={s.circle}>
                <img src={'https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX.jpg'}/>
            </div>
        </div>
    )
}
export default PanelHeaderControls;
