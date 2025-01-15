import s from "./SectionOfNav.module.scss";
import NavOfSection from "./navOfSection/NavOfSection.jsx";


const SectionOfNav = ({title, elements, ...props}) => {
    return (
        <div className={s.sectionOfNavContainer}>
            <h4 className={s.titleOfSection}>{title}</h4>
            <NavOfSection elements={elements}/>
        </div>
    )
}
export default SectionOfNav;
