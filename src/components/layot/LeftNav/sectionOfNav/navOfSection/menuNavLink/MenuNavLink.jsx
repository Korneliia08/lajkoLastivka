import s from "./MenuNavLink.module.scss";
import {NavLink} from "react-router-dom";


const MenuNavLink = ({icon, children, to, ...props}) => {
    return (
        <NavLink to={to} className={s.menuNavLinkContainer}>
            {icon}
            <span className={s.text}>
                 {children}
             </span>
        </NavLink>
    )
}
export default MenuNavLink;
