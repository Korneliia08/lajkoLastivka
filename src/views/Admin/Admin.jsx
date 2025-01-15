import style from "./Admin.module.scss";
import LeftNav from "../../components/layot/LeftNav/LeftNav.jsx";
import {Outlet} from "react-router-dom";
import PanelHeadTitle from "../../components/layot/panelHeadTitle/PanelHeadTitle.jsx";

function Admin() {
    return (
        <div className={style.container}>
            {/*<TopBelt/>*/}
            <div className={style.wrapper}>
                <LeftNav/>
                <div className={style.containerForOutlet}>
                    <PanelHeadTitle title={"LastivkaCompany"} text={"Marketplaces"}/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Admin;
