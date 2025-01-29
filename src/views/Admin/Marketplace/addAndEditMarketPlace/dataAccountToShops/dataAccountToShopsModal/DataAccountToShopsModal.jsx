import s from "./DataAccountToShopsModal.module.scss";
import { FaX } from "react-icons/fa6";
import RowOfFormAddAndEditShop from "@/components/ui/rowOfFormAddAndEditShop/RowOfFormAddAndEditShop.jsx";
import { useDispatch, useSelector } from "react-redux";
import { marketplaceSetField } from "@/views/Admin/Marketplace/addAndEditMarketPlace/marketplaceFormSlice.js";
import api from "@/providers/interceptors/refreshToken.interceptor.js";
import { toast } from "react-hot-toast";
import { useState } from "react";

const DataAccountToShopsModal = ({ controller, ...props }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const {
    rozetkaLogin,
    rozetkaPassword,
    isConnect: isConnect,
  } = useSelector((state) => state.marketplaceForm);
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(marketplaceSetField({ field: name, value }));
  };

  async function tryConnect() {
    return api.post("/stores/checkConnection", {
      login: rozetkaLogin,
      password: btoa(unescape(encodeURIComponent(rozetkaPassword))),
    });
  }

  async function connect() {
    setLoading(true);

    const isConnect = await toast.promise(tryConnect(), {
      //todo translate
      loading: "Trwa próba połączenia z sklepem",
      success: <b>Połączenie z sklepem udane</b>,
      error: <b>Błąd podłączenia do sklepu.</b>,
    });
    setLoading(false);
    dispatch(
      marketplaceSetField({
        field: "isConnect",
        value: isConnect,
      }),
    );
    if (isConnect) {
      controller.closeModal();
    }
  }

  // controller.closeModal();

  return (
    <div className={s.dataAccountToShopsModalContainer}>
      <h2>TITLE </h2>
      {isConnect ? "CONNECT" : "No connect"}
      <FaX onClick={controller.closeModal}></FaX>
      <RowOfFormAddAndEditShop
        onChange={handleChange}
        name={"rozetkaLogin"}
        value={rozetkaLogin}
        title={"Логін"}
        describe={"Введіть логін до кабінету магазину"}
      />
      <RowOfFormAddAndEditShop
        onChange={handleChange}
        name={"rozetkaPassword"}
        value={rozetkaPassword}
        title={"Пароль"}
        type={"password"}
        describe={"Введіть пароль" + " до кабінету" + " магазину"}
      />
      <button onClick={controller.closeModal}>Anuluj</button>
      <button onClick={connect}>Podłącz</button>
    </div>
  );
};
export default DataAccountToShopsModal;
