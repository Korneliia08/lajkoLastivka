import style from "./LeftNav.module.scss";
import SectionOfNav from "./sectionOfNav/SectionOfNav.jsx";
import {LuUsers} from "react-icons/lu";
import {FiHome} from "react-icons/fi";
import {GrPieChart} from "react-icons/gr";
import LeftNavTopPanel from "./leftNavTopPanel/LeftNavTopPanel.jsx";
import {version} from "@/version.js";
import {BiMessageSquareEdit} from "react-icons/bi";
import {RiPagesLine} from "react-icons/ri";

function LeftNav() {
    const dashboardElObj = [
        {title: "Аналітика", link: "dashboard", icon: <FiHome/>},
        {title: "Маркетплейси", link: "marketplaces", icon: <LuUsers/>},
        {title: "Статистики", link: "statistics", icon: <GrPieChart/>},
        {title: "Відгуки", link: "opinions", icon: <BiMessageSquareEdit/>},


        // {title: "Orders", link: "orders", icon: <FaListUl/>}
    ];
    const settingsElObj = [{title: "Сторінки", link: "filterPageSettings", icon: <RiPagesLine/>}];
    return (
        <>
            <div className={style.container}>
                <LeftNavTopPanel/>

                <div className={style.padding}>
                    <SectionOfNav title={"Головна"} elements={dashboardElObj}/>
                    <SectionOfNav title={"Налаштування"} elements={settingsElObj}/>
                </div>
                <span className={style.version}>v{version}</span>
            </div>
        </>
    );
}

export default LeftNav;
