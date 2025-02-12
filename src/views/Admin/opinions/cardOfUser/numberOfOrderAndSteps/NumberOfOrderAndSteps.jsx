import s from "./NumberOfOrderAndSteps.module.scss";
import { CiShoppingBasket } from "react-icons/ci";
import Steps from "@/views/Admin/opinions/cardOfUser/numberOfOrderAndSteps/Steps/Steps.jsx";

const NumberOfOrderAndSteps = ({ data, ...props }) => {
  let numberOfOrder = data.order.orderId;
  return (
    <div className={s.numberOfOrderAndEtapsContainer}>
      <div className={s.blockForIconAndNumber}>
        <CiShoppingBasket className={s.iconStyle} />
        <span className={s.numberOfOrder}>{numberOfOrder}</span>
      </div>
      <Steps data={data} />
    </div>
  );
};
export default NumberOfOrderAndSteps;
