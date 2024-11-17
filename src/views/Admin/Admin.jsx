import style from "./Admin.module.scss";
import TopBelt from "../../components/layot/TopBelt/TopBelt.jsx";
import LeftNav from "../../components/layot/LeftNav/LeftNav.jsx";
import {Outlet} from "react-router-dom";

function Admin() {
    return (
        <div className={style.container}>
            <TopBelt/>
            <div className={style.wrapper}>
                <LeftNav/>
                <div className={style.containerForOutlet}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Admin;
