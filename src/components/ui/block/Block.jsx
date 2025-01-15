import s from "./Block.module.scss";
import cn from "../../../functions/cn.js";


const Block = ({children, className, rightPart, ...props}) => {
    return (
        <div className={cn(s.blockContainer, className)}>
            {children}
            {rightPart &&
                <div className={s.rightPart}>
                    {rightPart}
                </div>}
        </div>
    )
}
export default Block;
