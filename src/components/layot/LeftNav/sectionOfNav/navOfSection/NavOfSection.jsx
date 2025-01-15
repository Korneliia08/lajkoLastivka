import s from "./NavOfSection.module.scss";
import MenuNavLink from "./menuNavLink/MenuNavLink.jsx";


const NavOfSection = ({elements, ...props}) => {
    return (
        <div className={s.navOfSectionContainer}>
            {elements.map(el => {
                return <MenuNavLink to={el.link} icon={el.icon}>{el.title}</MenuNavLink>
            })}
        </div>
    )
}
export default NavOfSection;
