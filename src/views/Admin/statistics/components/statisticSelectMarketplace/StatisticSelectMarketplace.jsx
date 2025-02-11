import s from "./StatisticSelectMarketplace.module.scss";
import Select from "react-select";
import useFetch from "@hooks/useFetch.js";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react"; // Importujemy useParams i useHistory

const StatisticSelectMarketplace = ({ storeId, ...props }) => {
  const { data, loading } = useFetch("stores", {
    default: [],
  });

  useEffect(() => {
    try {
      if (!storeId) {
        navigate(`/admin/statistics/${data[0].id}`);
      }
    } catch (err) {}
  }, [data]);
  let dataToSelect = data.map((obj) => {
    return { value: obj.id, label: obj.name };
  });
  dataToSelect = [{ value: "0", label: "Усі магазини" }, ...dataToSelect];
  const navigate = useNavigate();

  function change(event) {
    navigate(`/admin/statistics/${event.value}`);
  }

  return (
    <div className={s.statisticSelectMarketplaceContainer}>
      <span>Оберіть маркетплейс:</span>
      <Select
        value={dataToSelect.filter((el) => el.value == storeId)}
        onChange={change}
        options={dataToSelect}
      />
    </div>
  );
};
export default StatisticSelectMarketplace;
