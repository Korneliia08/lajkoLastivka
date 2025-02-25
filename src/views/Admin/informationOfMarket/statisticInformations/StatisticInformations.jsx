import s from "./StatisticInformations.module.scss";
import InfoTile from "../../../../components/ui/statisitc/infoTile/InfoTile.jsx";
import { CgMail } from "react-icons/cg";
import useFetch from "@hooks/useFetch.js";
import { useParams } from "react-router-dom";
import Block from "@/components/ui/block/Block.jsx";
import {
  FaCommentDots,
  FaEnvelopeOpen,
  FaMousePointer,
  FaRegCommentDots,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const StatisticInformations = ({ ...props }) => {
  const { id } = useParams();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  useEffect(() => {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    setStartTime(startOfMonth);

    const currentDate = new Date();
    setEndTime(currentDate);
  }, []);

  const { data } = useFetch(
    `statisticPage/blocks/${id}?startTime=${startTime.toISOString()}&endTime=${endTime.toISOString()}`,
    {
      default: undefined,
      autoRefresh: 20000,
    },
  );
  const calculatePercentageChange = (now, prev) => {
    if (prev === 0) return now === 0 ? 0 : 100;
    return ((now - prev) / prev) * 100;
  };

  if (!data) return "";
  return (
    <Block className={s.statisticInformationsContainer}>
      <div className={s.topPanel}>
        <h5>Підсумковий звіт</h5>
        <h6>Підсумки за останній місяць</h6>
      </div>
      <div className={s.mainContainer}>
        <InfoTile
          icon={<CgMail />}
          value={data?.sendMessages?.now || 0}
          secondValue={calculatePercentageChange(
            data?.sendMessages?.now || 0,
            data?.sendMessages?.prev || 0,
          )}
          title={"Надіслані повідомлення"} // wysłane wiadomości
        />
        <InfoTile
          icon={<FaEnvelopeOpen />}
          value={data?.readMessages?.now || 0}
          secondValue={calculatePercentageChange(
            data?.readMessages?.now || 0,
            data?.readMessages?.prev || 0,
          )}
          title={"Прочитані повідомлення"} // przeczytane
        />
        <InfoTile
          icon={<FaMousePointer />}
          value={data?.clickedMessages?.now || 0}
          secondValue={calculatePercentageChange(
            data?.clickedMessages?.now || 0,
            data?.clickedMessages?.prev || 0,
          )}
          title={"Відвідані посилання"} // Kliknięte wiadomości
        />
        <InfoTile
          icon={<FaStarHalfAlt />}
          value={data?.rating13?.now || 0}
          secondValue={calculatePercentageChange(
            data?.rating13?.now || 0,
            data?.rating13?.prev || 0,
          )}
          title={"Рейтинг: 1–3 "} // Opinie 1-3
        />
        <InfoTile
          icon={<FaStar />}
          value={data?.rating45?.now || 0}
          secondValue={calculatePercentageChange(
            data?.rating45?.now || 0,
            data?.rating45?.prev || 0,
          )}
          title={"Рейтинг: 4–5 "} // Opinie 4-5
        />
        <InfoTile
          icon={<FaRegCommentDots />}
          value={data?.opinionsFeedMp?.now || 0}
          secondValue={calculatePercentageChange(
            data?.opinionsFeedMp?.now || 0,
            data?.opinionsFeedMp?.prev || 0,
          )}
          title={"Відгуки у feedMP"} // FeedMp
        />
        <InfoTile
          icon={<FaCommentDots />}
          value={data?.opinionsRozetka?.now || 0}
          secondValue={calculatePercentageChange(
            data?.opinionsRozetka?.now || 0,
            data?.opinionsRozetka?.prev || 0,
          )}
          title={"Відгуки на розетці"} // Opinie Rozetka
        />
      </div>
    </Block>
  );
};
export default StatisticInformations;
