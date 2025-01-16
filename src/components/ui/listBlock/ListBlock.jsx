import s from "./ListBlock.module.scss";
import BlockTitle from "../block/blockTitle/BlockTitle.jsx";


const ListBlock = ({title, children, ...props}) => {
    return (
        <div className={s.listBlockContainer}>
            <div className={s.listContainer}>
                <BlockTitle>{title}</BlockTitle>
            </div>
            {children}
        </div>
    )
}
export default ListBlock;
