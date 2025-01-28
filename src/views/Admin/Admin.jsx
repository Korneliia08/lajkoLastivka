import style from "./Admin.module.scss";
import LeftNav from "../../components/layot/LeftNav/LeftNav.jsx";
import {Outlet} from "react-router-dom";
import PanelHeadTitle from "../../components/layot/panelHeadTitle/PanelHeadTitle.jsx";

function Admin() {
    return (
        <div className={style.container}>
            <div className={style.innerContainer}>

                {/*<TopBelt/>*/}
                <div className={style.wrapper}>
                    <LeftNav/>
                    <div className={style.containerForOutlet}>
                        <PanelHeadTitle title={"ЛайкоЛастівка"}
                                        text={"Адмінка для управління запитами на оцінки замовлень і аналізу відгуків"}/>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;
