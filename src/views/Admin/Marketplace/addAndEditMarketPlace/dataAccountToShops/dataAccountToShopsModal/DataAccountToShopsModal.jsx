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
      password: rozetkaPassword,
    });
  }

  async function connect() {
    setLoading(true);

    const isConnect = await toast.promise(tryConnect(), {
      loading: "Відбувається спроба з'єднання з магазином",
      success: <b>Підключення із магазином успішно проведено</b>,
      error: <b>Помилка підключення із магазином</b>,
    });
    setLoading(false);
    dispatch(
      marketplaceSetField({
        field: "isConnect",
        value: isConnect.data,
      }),
    );
    if (isConnect) {
      controller.closeModal();
    }
  }

  // controller.closeModal();

  return (
    <div className={s.dataAccountToShopsModalContainer}>
      <h2 className={s.title}>
        Підключення магазину до адміністративної панелі
      </h2>
      <FaX onClick={controller.closeModal} className={s.close}></FaX>
      <div className={s.containerForRows}>
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
      </div>
      <div className={s.blockForBtns}>
        <button onClick={controller.closeModal}>Скасувати</button>
        <button onClick={connect}>Підключити</button>
      </div>
    </div>
  );
};
export default DataAccountToShopsModal;
