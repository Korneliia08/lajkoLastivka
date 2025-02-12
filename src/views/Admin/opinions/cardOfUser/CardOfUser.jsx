import s from "./CardOfUser.module.scss";
import NumberOfOrderAndEtaps from "@/views/Admin/opinions/cardOfUser/numberOfOrderAndEtaps/NumberOfOrderAndEtaps.jsx";
import DataOfUser from "@/views/Admin/opinions/dataOfUser/DataOfUser.jsx";
import BlockOfIcons from "@/views/Admin/opinions/cardOfUser/blockOfIcons/BlockOfIcons.jsx";
import UnfoldedCard from "@/views/Admin/opinions/cardOfUser/unfoldedCard/UnfoldedCard.jsx";
import { useState } from "react";
import cn from "@/functions/cn.js";

const CardOfUser = ({ data, ...props }) => {
  console.log(data);
  const [isOpenBottomCard, setOpenBottomCard] = useState(false);
  return (
    <div className={cn(s.container, isOpenBottomCard && s.openBottom)}>
      <div className={s.cardOfUserContainer}>
        <NumberOfOrderAndEtaps data={data} />
        <DataOfUser />
        <BlockOfIcons
          data={data}
          setOpenBottomCard={setOpenBottomCard}
          isOpenBottomCard={isOpenBottomCard}
        />
      </div>
      {isOpenBottomCard && <UnfoldedCard />}
    </div>
  );
};
export default CardOfUser;
