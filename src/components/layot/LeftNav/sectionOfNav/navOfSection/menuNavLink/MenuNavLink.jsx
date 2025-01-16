import s from "./MenuNavLink.module.scss";
import {NavLink, useLocation} from "react-router-dom";
import cn from "../../../../../../functions/cn.js";
import {useEffect, useState} from "react";

const MenuNavLink = ({icon, children, to, ...props}) => {
    const [active, setActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname.includes(to));
    }, [to, location.pathname]);
    return (
        <NavLink to={to} className={cn(s.menuNavLinkContainer, active && s.isActive)}>
            {icon}
            <span className={s.text}>
                {children}
            </span>
        </NavLink>
    );
};

export default MenuNavLink;
