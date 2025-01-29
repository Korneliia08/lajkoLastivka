import s from "./PanelHeaderControls.module.scss";
import {BiBell, BiLogOut} from "react-icons/bi";
import cn from "@/functions/cn.js";
import {useState} from "react";
import {ClickAwayListener} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {FiUser} from "react-icons/fi";

const PanelHeaderControls = (props) => {
    const [isOpenDropPanel, setOpenDropPanel] = useState(false);
    const navigate = useNavigate();

    function logOut() {
        navigate("/");
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
    }

    return (
        <div className={s.panelHeaderControlsContainer}>
            <div className={cn(s.circle, s.disable)}>
                <BiBell/>
            </div>
            <ClickAwayListener onClickAway={() => setOpenDropPanel(false)}>
                <div className={s.circle}>
                    <FiUser onClick={() => setOpenDropPanel(true)}/>
                    {isOpenDropPanel && (
                        <div className={s.dropPanel}>
                            <button onClick={logOut}>
                                <BiLogOut/> LogOut
                            </button>
                        </div>
                    )}
                </div>
            </ClickAwayListener>
        </div>
    );
};
export default PanelHeaderControls;
