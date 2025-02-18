import s from "./Steps.module.scss";

import { IoSendOutline } from "react-icons/io5";
import { TbHandClick, TbMessage2Check } from "react-icons/tb";
import Step from "@/views/Admin/opinions/cardOfUser/numberOfOrderAndSteps/Steps/Step/Step.jsx";
import { MdOutlineStarBorder } from "react-icons/md";
import rozetkaLogo from "../../../../../../assets/images/rozetkaLogo.png";
import circleLogo from "../../../../../../assets/circleLogo.png";

const Steps = ({ data, ...props }) => {
  let localOpinion = undefined;
  let stars = undefined;
  try {
    localOpinion = data.order.items[0].localOpinion;
    stars = localOpinion.ratingScore;
  } catch (err) {}
  const opinion = data.order.items[0].opinion;
  console.log(data);
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
        title={
          data.readAt == null
            ? "Повідомлення не прочитано"
            : "Повідомлення прочитано"
        }
        disable={data.readAt == null}
        icon={<TbMessage2Check size={14} style={{ color: "#011c5d" }} />}
      />
      <Step
        disable={data.clickedAt == null}
        title={
          data.clickedAt == null
            ? "Посилання відвідано"
            : "Посилання не відвідано"
        }
        icon={
          <TbHandClick
            size={14}
            style={{ color: "#011c5d" }}
            title={"Посилання відвідано"}
          />
        }
      />

      <Step
        disable={!localOpinion}
        icon={
          <MdOutlineStarBorder
            size={14}
            style={{
              color: localOpinion
                ? localOpinion.ratingScore <= 3
                  ? "rgb(255, 0, 0)"
                  : "rgb(21, 128, 77)"
                : "rgb(122,122,122)",
            }}
            title={"Замовлення оцінено"}
          />
        }
      />

      {stars <= 3 && (
        <Step
          disable={
            (!localOpinion && !localOpinion.opinion) ||
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
