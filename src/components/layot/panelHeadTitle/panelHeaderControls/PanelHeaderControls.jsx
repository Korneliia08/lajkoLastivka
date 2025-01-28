import s from "./PanelHeaderControls.module.scss";
import { BiBell } from "react-icons/bi";
import cn from "@/functions/cn.js";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PanelHeaderControls = (props) => {
  const [isOpenDropPanel, setOpenDropPanel] = useState(false);
  const navigate = useNavigate();

  function logOut() {
    navigate("./");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
  }

  return (
    <div className={s.panelHeaderControlsContainer}>
      <div className={cn(s.circle, s.disable)}>
        <BiBell />
      </div>
      <ClickAwayListener onClickAway={() => setOpenDropPanel(false)}>
        <div className={s.circle}>
          <img
            onClick={() => setOpenDropPanel(true)}
            src={"https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX.jpg"}
          />
          {isOpenDropPanel && (
            <div className={s.dropPanel}>
              <button onClick={logOut}>LogOut</button>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
};
export default PanelHeaderControls;
