import s from "./Etaps.module.scss";
import Etap from "@/views/Admin/opinions/cardOfUser/numberOfOrderAndEtaps/etaps/etap/Etap.jsx";
import {IoSendOutline} from "react-icons/io5";
import {TbHandClick, TbMessage2Check, TbShoppingBagHeart} from "react-icons/tb";
import {IoIosStarOutline} from "react-icons/io";


const Etaps = ({...props}) => {
    return (
        <div className={s.etapsContainer}>
            <Etap icon={<IoSendOutline size={14} style={{color: "white"}}/>}/>
            <Etap icon={<TbMessage2Check size={14} style={{color: "white"}}/>}/>
            <Etap icon={<TbHandClick size={14} style={{color: "white"}}/>}/>
            <Etap icon={<IoIosStarOutline size={14} style={{color: "white"}}/>}/>
            <Etap icon={<TbShoppingBagHeart size={14} style={{color: "white"}}/>}/>
        </div>
    )
}
export default Etaps;
