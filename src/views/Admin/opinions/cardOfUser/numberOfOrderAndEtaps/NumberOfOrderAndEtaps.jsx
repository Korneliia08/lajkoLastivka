import s from "./NumberOfOrderAndEtaps.module.scss";
import {CiShoppingBasket} from "react-icons/ci";
import Etaps from "@/views/Admin/opinions/cardOfUser/numberOfOrderAndEtaps/etaps/Etaps.jsx";


const NumberOfOrderAndEtaps = ({numberOfOrder, ...props}) => {
    numberOfOrder = "4569871248";
    return (
        <div className={s.numberOfOrderAndEtapsContainer}>
            <div className={s.blockForIconAndNumber}>
                <CiShoppingBasket className={s.iconStyle}/>
                <span className={s.numberOfOrder}>{numberOfOrder}</span>
            </div>
            <Etaps/>
        </div>
    )
}
export default NumberOfOrderAndEtaps;
