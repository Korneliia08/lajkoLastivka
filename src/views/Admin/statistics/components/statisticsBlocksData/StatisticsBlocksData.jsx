import s from "./StatisticsBlocksData.module.scss";
import InfoTile from "@/components/ui/statisitc/infoTile/InfoTile.jsx";
import { CgMail } from "react-icons/cg";
import {
  FaCommentDots,
  FaEnvelopeOpen,
  FaMousePointer,
  FaRegCommentDots,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import useFetch from "@hooks/useFetch.js";
import { useSelector } from "react-redux";

const StatisticsBlocksData = ({ storeId, ...props }) => {
  const startTime = useSelector((state) => state.statistics.startTime);
  const endTime = useSelector((state) => state.statistics.endTime);

  const { data } = useFetch(
    `statisticPage/blocks/${storeId}?startTime=${startTime}&endTime=${endTime}`,
  );
  console.log(data);

  const calculatePercentageChange = (now, prev) => {
    if (prev === 0) return now === 0 ? 0 : 100; // Zapobiega dzieleniu przez 0
    return ((now - prev) / prev) * 100;
  };

  return (
    <div className={s.statisticsBlocksDataContainer}>
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
      <InfoTile
        icon={<FaCommentDots />}
        value={Math.round(data?.costRozetka?.now) || 0 + "UAH"}
        secondValue={calculatePercentageChange(
          data?.costRozetka?.now || 0,
          data?.costRozetka?.prev || 0,
        )}
        title={"Вартість відгуку на розетці"} // Opinie Rozetka
      />
    </div>
  );
};

export default StatisticsBlocksData;
