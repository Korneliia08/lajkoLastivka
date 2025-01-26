import style from "./LeftNav.module.scss";
import SectionOfNav from "./sectionOfNav/SectionOfNav.jsx";
import {LuUsers} from "react-icons/lu";
import {FiHome} from "react-icons/fi";
import {GrPieChart} from "react-icons/gr";
import LeftNavTopPanel from "./leftNavTopPanel/LeftNavTopPanel.jsx";

function LeftNav() {
    const dashboardElObj = [
        {title: "Dashboard", link: "dashboard", icon: <FiHome/>},
        {title: "Маркетплейси", link: "marketplaces", icon: <LuUsers/>},
        {title: "Статистики", link: "statistics", icon: <GrPieChart/>},
        // {title: "Orders", link: "orders", icon: <FaListUl/>}
    ];
    const settingsElObj = [{title: "Регулювання часу", link: ""}];
    return (
        <>
            <div className={style.container}>
                <LeftNavTopPanel/>

                <div className={style.padding}>
                    <SectionOfNav title={"Dashboard"} elements={dashboardElObj}/>
                    <SectionOfNav title={"Налаштування"} elements={settingsElObj}/>
                </div>
            </div>
        </>
    )
}

export default LeftNav;
