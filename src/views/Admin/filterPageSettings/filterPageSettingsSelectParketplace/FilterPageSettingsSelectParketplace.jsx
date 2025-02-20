import s from "./FilterPageSettingsSelectParketplace.module.scss";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "@hooks/useFetch.js";

const FilterPageSettingsSelectParketplace = ({ ...props }) => {
  const { id } = useParams();
  const { data, loading } = useFetch("stores", {
    default: [],
  });
  useEffect(() => {
    try {
      if (!id) {
        navigate(`/admin/filterPageSettings/${data[0].id}`);
      }
    } catch (err) {}
  }, [data]);
  let dataToSelect = data.map((obj) => {
    return { value: obj.id, label: obj.name };
  });

  const navigate = useNavigate();
  //
  function change(event) {
    navigate(`/admin/filterPageSettings/${event.value}`);
  }

  return (
    <div className={s.opinionsSelectMarketplaceContainer}>
      <Select
        value={dataToSelect.filter((el) => el.value == id)}
        onChange={change}
        options={dataToSelect}
      />
    </div>
  );
};
export default FilterPageSettingsSelectParketplace;
