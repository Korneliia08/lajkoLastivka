import s from "./Etaps.module.scss";
import Etap from "@/views/Admin/opinions/cardOfUser/numberOfOrderAndEtaps/etaps/etap/Etap.jsx";
import {IoSendOutline} from "react-icons/io5";
import {TbHandClick, TbMessage2Check, TbShoppingBagHeart} from "react-icons/tb";
import {MdOutlineStarBorder} from "react-icons/md";


const Etaps = ({...props}) => {
    return (
        <div className={s.etapsContainer}>
            <Etap icon={<IoSendOutline size={14} style={{color: "black"}} title={"Повідомлення надіслано"}/>}/>
            <Etap icon={<TbMessage2Check size={14} style={{color: "black"}} title={"Повідомлення прочитано"}/>}/>
            <Etap icon={<TbHandClick size={14} style={{color: "black"}} title={"Посилання відвідано"}/>}/>
            <Etap icon={<MdOutlineStarBorder size={14} style={{color: "red"}} title={"Замовлення оцінено"}/>}/>
            {/*#49ff54 - jesli 4-5 reviews*/}
            <Etap icon={<TbShoppingBagHeart size={14} style={{color: "black"}} title={"Відгук написано"}/>}/>

            {/*tu nie poswiecamy kolko*/}
            {/*    4-5 - opinia nie napisana Відгук не залишено*/}
            {/*1-3 - ( gdy opinia na feedmp nie napisana,i na rozetce tez nie) - opinia nie napisana - Відгук не залишено*/}

            {/*tu poswiecamy ze aktywne kolko jednak*/}
            {/*1-3 - (gdy opinia na feedmp nie napisana,ale na rozetce ta) - opinia napisana,ale na Rozetce Відгук залишено,але на розетці */}
        </div>
    )
}
export default Etaps;
