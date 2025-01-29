import s from "./DataAccountToShopsModal.module.scss";
import { FaX } from "react-icons/fa6";
import RowOfFormAddAndEditShop from "@/components/ui/rowOfFormAddAndEditShop/RowOfFormAddAndEditShop.jsx";
import { useDispatch, useSelector } from "react-redux";
import { marketplaceSetField } from "@/views/Admin/Marketplace/addAndEditMarketPlace/marketplaceFormSlice.js";
import api from "@/providers/interceptors/refreshToken.interceptor.js";

const DataAccountToShopsModal = ({ controller, ...props }) => {
  const dispatch = useDispatch();
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
    try {
      const response = await api.post("/stores/checkConnection", {
        login: rozetkaLogin,
        password: btoa(unescape(encodeURIComponent(rozetkaPassword))),
      });
      console.log(response.data);
      if (response.data) {
        return true;
      } else {
        console.error("Login failed _ 1");
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async function connect() {
    const isConnect = await tryConnect();

    dispatch(
      marketplaceSetField({
        field: "isConnect",
        value: isConnect,
      }),
    );
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
