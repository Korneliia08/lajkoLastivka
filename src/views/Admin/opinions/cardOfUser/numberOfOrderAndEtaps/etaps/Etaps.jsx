import s from "./Etaps.module.scss";
import Etap from "@/views/Admin/opinions/cardOfUser/numberOfOrderAndEtaps/etaps/etap/Etap.jsx";
import {IoSendOutline} from "react-icons/io5";
import {TbHandClick, TbMessage2Check, TbShoppingBagHeart} from "react-icons/tb";
import {IoIosStarOutline} from "react-icons/io";


const Etaps = ({...props}) => {
    return (
        <div className={s.etapsContainer}>
            <Etap icon={<IoSendOutline style={{color: "white"}}/>}/>
            <Etap icon={<TbMessage2Check style={{color: "white"}}/>}/>
            <Etap icon={<TbHandClick style={{color: "white"}}/>}/>
            <Etap icon={<IoIosStarOutline style={{color: "white"}}/>}/>
            <Etap icon={<TbShoppingBagHeart style={{color: "white"}}/>}/>
        </div>
    )
}
export default Etaps;
