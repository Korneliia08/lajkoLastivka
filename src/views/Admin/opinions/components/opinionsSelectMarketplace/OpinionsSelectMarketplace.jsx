import s from "./OpinionsSelectMarketplace.module.scss";
import useFetch from "@hooks/useFetch.js";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const OpinionsSelectMarketplace = ({ ...props }) => {
  const { id } = useParams();
  const { data, loading } = useFetch("stores", {
    default: [],
  });
  const storeId = 7;
  useEffect(() => {
    try {
      if (!id) {
        navigate(`/admin/opinions/${data[0].id}`);
      }
    } catch (err) {}
  }, [data]);
  let dataToSelect = data.map((obj) => {
    return { value: obj.id, label: obj.name };
  });
  dataToSelect = [{ value: "0", label: "Усі магазини" }, ...dataToSelect];
  const navigate = useNavigate();
  //
  function change(event) {
    navigate(`/admin/opinions/${event.value}`);
  }

  return (
    <div className={s.opinionsSelectMarketplaceContainer}>
      <span>Оберіть маркетплейс:</span>
      <Select
        value={dataToSelect.filter((el) => el.value == id)}
        onChange={change}
        options={dataToSelect}
      />
    </div>
  );
};
export default OpinionsSelectMarketplace;
