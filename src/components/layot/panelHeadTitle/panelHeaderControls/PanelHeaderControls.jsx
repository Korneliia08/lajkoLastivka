import s from "./PanelHeaderControls.module.scss";
import { BiBell } from "react-icons/bi";
import cn from "@/functions/cn.js";
import { useState } from "react";

const PanelHeaderControls = (props) => {
  const [isOpenDropPanel, setOpenDropPanel] = useState(false);
  return (
    <div className={s.panelHeaderControlsContainer}>
      <div className={cn(s.circle, s.disable)}>
        <BiBell />
      </div>
      <div
        className={s.circle}
        onClick={() => setOpenDropPanel(!isOpenDropPanel)}
      >
        <img
          src={"https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX.jpg"}
        />
        {isOpenDropPanel && (
          <div className={s.dropPanel}>
            <button>LogOut</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default PanelHeaderControls;
