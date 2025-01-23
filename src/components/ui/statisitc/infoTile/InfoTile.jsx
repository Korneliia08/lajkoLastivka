import s from "./InfoTile.module.scss";
import {TfiFaceSad} from "react-icons/tfi";
import cn from "../../../../functions/cn.js";


const InfoTile = ({
                      icon = <TfiFaceSad/>,
                      title = 'Clicks',
                      value = '₴324K',
                      secondValue = ' 87.5',
                      description = 'last month'
                  }) => {
    function getColor() {
        return secondValue > 0 ? s.green : s.red;

    }

    function secondValueConv() {
        if (!secondValue) return '-'
        if (secondValue > 0) {

            return "+" + secondValue + '%';
        } else {
            return "-" + secondValue + '%';

        }
    }

    return (
        <div className={s.infoTileContainer}>
            <div className={s.informationPanel}>
                <div className={s.icon}>
                    {icon}
                </div>
                <span className={s.title}>{title}</span>
            </div>
            <div className={s.valuePanel}>
                <div className={s.content}>
                    <div className={s.left}><span className={s.primaryValue}>{value}</span></div>
                    <div className={s.right}>
                        <span className={cn(s.secondaryValue, getColor())}>{secondValueConv()}</span>
                        <span className={s.description}>{description}</span>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default InfoTile;
