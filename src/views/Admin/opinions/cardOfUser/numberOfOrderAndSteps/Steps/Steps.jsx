import s from "./Steps.module.scss";

import { IoSendOutline } from "react-icons/io5";
import { TbHandClick, TbMessage2Check } from "react-icons/tb";
import Step from "@/views/Admin/opinions/cardOfUser/numberOfOrderAndSteps/Steps/Step/Step.jsx";
import rozetkaLogo from "../../../../../../assets/images/rozetkaLogo.png";
import circleLogo from "../../../../../../assets/circleLogo.png";
import { AiTwotoneStar } from "react-icons/ai";

const Steps = ({ data, ...props }) => {
  const localOpinion = data.order.items[0].localOpinion;
  const stars = localOpinion.ratingScore;
  const opinion = data.order.items[0].opinion;

  return (
    <div className={s.etapsContainer}>
      <Step
        icon={
          <IoSendOutline
            size={14}
            style={{ color: "#011c5d" }}
            title={"Повідомлення надіслано"}
          />
        }
      />
      <Step
        icon={
          <TbMessage2Check
            size={14}
            style={{ color: "#011c5d" }}
            title={"Повідомлення прочитано"}
          />
        }
      />
      <Step
        icon={
          <TbHandClick
            size={14}
            style={{ color: "#011c5d" }}
            title={"Посилання відвідано"}
          />
        }
      />

      <Step
        icon={
          <AiTwotoneStar
            size={14}
            style={{
              color:
                localOpinion.ratingScore <= 3
                  ? "rgb(255, 0, 0)"
                  : "rgb(21, 128, 77)",
            }}
            title={"Замовлення оцінено"}
          />
        }
      />

      {stars <= 3 && (
        <Step
          disable={
            !localOpinion.opinion ||
            (localOpinion &&
              localOpinion.opinion &&
              localOpinion.opinion.length == 0)
          }
          img={true}
          icon={
            // <TbShoppingBagHeart
            //     size={14}
            //     style={{color: "#011c5d"}}
            //     title={"Відгук написано"}
            // />
            <img
              src={circleLogo}
              title={
                !localOpinion.opinion ||
                (localOpinion &&
                  localOpinion.opinion &&
                  localOpinion.opinion.length == 0)
                  ? "Не залишено відгук на feedMP"
                  : "Залишено відгук на feedMP"
              }
            />
          }
        />
      )}
      <Step
        disable={!opinion}
        img={true}
        icon={
          // <TbShoppingBagHeart
          //     size={14}
          //     style={{color: "#011c5d"}}
          //     title={"Відгук написано"}
          // />
          <img
            src={rozetkaLogo}
            title={
              !opinion
                ? "Не залишено відгук на розетці"
                : "Залишено відгук на розетці"
            }
          />
        }
      />

      {/*tu nie poswiecamy kolko*/}
      {/*    4-5 - opinia nie napisana Відгук не залишено*/}
      {/*1-3 - ( gdy opinia na feedmp nie napisana,i na rozetce tez nie) - opinia nie napisana - Відгук не залишено*/}

      {/*tu poswiecamy ze aktywne kolko jednak*/}
      {/*1-3 - (gdy opinia na feedmp nie napisana,ale na rozetce ta) - opinia napisana,ale na Rozetce Відгук залишено,але на розетці */}
    </div>
  );
};
export default Steps;
