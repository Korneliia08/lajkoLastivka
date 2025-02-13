import s from "./CardOfUser.module.scss";
import DataOfUser from "@/views/Admin/opinions/cardOfUser/dataOfUser/DataOfUser.jsx";
import BlockOfIcons from "@/views/Admin/opinions/cardOfUser/blockOfIcons/BlockOfIcons.jsx";
import UnfoldedCard from "@/views/Admin/opinions/cardOfUser/unfoldedCard/UnfoldedCard.jsx";
import cn from "@/functions/cn.js";
import NumberOfOrderAndSteps from "@/views/Admin/opinions/cardOfUser/numberOfOrderAndSteps/NumberOfOrderAndSteps.jsx";

const CardOfUser = ({
  setOpenBottomCard,
  isOpenBottomCard,
  data,
  ...props
}) => {
  return (
    <div className={cn(s.container, isOpenBottomCard && s.openBottom)}>
      <div className={s.cardOfUserContainer}>
        <NumberOfOrderAndSteps data={data} />
        <DataOfUser data={data} />
        <BlockOfIcons
          data={data}
          setOpenBottomCard={setOpenBottomCard}
          isOpenBottomCard={isOpenBottomCard}
        />
      </div>

      <UnfoldedCard isOpen={isOpenBottomCard === data.id} data={data} />
    </div>
  );
};
export default CardOfUser;
