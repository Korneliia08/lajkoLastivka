import s from "./DetailsOfShop.module.scss";
import SubtitleInForm from "@/views/Admin/Marketplace/addAndEditMarketPlace/subtitleInForm/SubtitleInForm.jsx";
import RowOfFormAddAndEditShop from "@/components/ui/rowOfFormAddAndEditShop/RowOfFormAddAndEditShop.jsx";
import LoadImageFromComputer from "@/components/ui/loadImageFromComputer/LoadImageFromComputer.jsx";
import { marketplaceSetField } from "@/views/Admin/Marketplace/addAndEditMarketPlace/marketplaceFormSlice.js";
import { useDispatch, useSelector } from "react-redux";

const DetailsOfShop = ({ ...props }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(marketplaceSetField({ field: name, value }));
  };
  const { name, link, logo, description } = useSelector(
    (state) => state.marketplaceForm,
  );

  return (
    <div className={s.detailsOfShopContainer}>
      <SubtitleInForm
        title={"Основні інформації"}
        describe={"Введіть ключові дані про свій магазин"}
      />
      <form>
        <RowOfFormAddAndEditShop
          value={name}
          onChange={handleChange}
          name={"name"}
          title={"Назва"}
          describe={""}
          placeholder={"Введіть назву магазину"}
          type={"text"}
        />
        <RowOfFormAddAndEditShop
          onChange={handleChange}
          name={"description"}
          value={description}
          title={"Опис"}
          describe={""}
        />
        <RowOfFormAddAndEditShop
          name={"link"}
          onChange={handleChange}
          value={link}
          title={"Посилання"}
          describe={"Введіть посилання до магазину"}
        />
        <LoadImageFromComputer
          title={"Лого"}
          name={"logo"}
          value={logo}
          onChange={(file) =>
            handleChange({ target: { name: "logo", value: file } })
          }
          describe={"Лого використовуватиметься у цій адмінці"}
        />
      </form>
    </div>
  );
};
export default DetailsOfShop;
