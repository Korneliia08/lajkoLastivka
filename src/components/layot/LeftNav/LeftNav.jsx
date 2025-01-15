import style from "./LeftNav.module.scss";
import {FaChartLine, FaShopify} from "react-icons/fa";
import {NavLink} from "react-router-dom";

function LeftNav() {
    return (
        <div className={style.container}>
            <span className={style.titleOfNav}>Панель адміністратора</span>
            <nav className={style.nav}>
                <div className={[style.blockForA, style.disabled].join(" ")}>
                    <FaChartLine/>
                    <a href="#">Статистики</a>
                </div>
                <div className={style.blockForA}>
                    <FaShopify/>
                    <NavLink to={"marketplaces"}>Маркетплейси</NavLink>
                </div>
                {/*<div className={[style.blockForA, style.disabled].join(" ")}>*/}
                {/*    <FaBusinessTime/>*/}
                {/*    <a href="#">Бізнес</a>*/}
                {/*</div>*/}
                {/*<div className={[style.blockForA, style.disabled].join(" ")}>*/}
                {/*    <FaIdCard/>*/}
                {/*    <a href="#">Картки</a>*/}
                {/*</div>*/}
            </nav>
        </div>
    )
}

export default LeftNav;
