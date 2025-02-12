import s from "./CardOfUser.module.scss";
import NumberOfOrderAndEtaps from "@/views/Admin/opinions/cardOfUser/numberOfOrderAndEtaps/NumberOfOrderAndEtaps.jsx";
import DataOfUser from "@/views/Admin/opinions/dataOfUser/DataOfUser.jsx";
import BlockOfIcons from "@/views/Admin/opinions/cardOfUser/blockOfIcons/BlockOfIcons.jsx";


const CardOfUser = ({...props}) => {
    return (
        <div className={s.cardOfUserContainer}>
            <NumberOfOrderAndEtaps/>
            <DataOfUser/>
            <BlockOfIcons/>
        </div>
    )
}
export default CardOfUser;
