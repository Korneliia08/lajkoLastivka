import s from "./ManualMessageDispatch.module.scss";
import ManualDispatchContent from "./manualDispatchContent/ManualDispatchContent.jsx";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../../providers/interceptors/refreshToken.interceptor.js";
import { useEffect, useState } from "react";
import {
  refreshOrdersList,
  removeAllSelectedOrder,
} from "../../../ordersSlice.js";
import toast from "react-hot-toast";
import { confirmAlert } from "react-confirm-alert";

const ManualMessageDispatch = ({ storeData, controller, ...props }) => {
  const [data, setData] = useState({
    message: "",
    imageData: "",
    imageLogoData: "",
  });
  const [isBlocked, setBlocked] = useState(false);

  const selectedOrders = useSelector((state) => state.orders.selectedOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    setBlocked(false);
    const savedKeepInMemory = JSON.parse(localStorage.getItem("keepInMemory"));
    if (savedKeepInMemory) {
      loadDefault();
    }
  }, [storeData]);

  function loadDefault() {
    console.log(storeData);
    if (storeData) {
      setData({
        message: storeData.messageTemplateViber,
        imageData: storeData.bannerImg,
        imageLogoData: storeData.logoImg,
      });
    }
  }

  async function sendData() {
    try {
      const obj = {
        ordersId: selectedOrders.map((order) => order.id),
        message: data.message,
        imageData: data.imageData,
        imageLogoData: data.imageLogoData,
      };
      setBlocked(true);
      try {
        await toast.promise(api.post("/messages/sendManual", obj), {
          loading: "Підготовка повідомлень до надсилання",
          //todo treanslate
          success: <b>Повідомлення надіслано!</b>,
          error: <b>Виникла помилка. Спробуйте пізніше</b>,
        });
        setBlocked(false);
      } catch (err) {
        setBlocked(false);
      }

      dispatch(removeAllSelectedOrder());
      dispatch(refreshOrdersList());
      setTimeout(() => {
        dispatch(refreshOrdersList());
      }, 5000);
      setTimeout(() => {
        dispatch(refreshOrdersList());
      }, 12000);
      controller.closeModal();
    } catch (err) {
      dispatch(refreshOrdersList());
      setBlocked(false);
      console.log(err);
    }
  }

  async function dispatchMessage() {
    confirmAlert({
      title: "Ви впевнені, що хочете надіслати повідомлення?",
      message: "Сума повідомлень для надсилання:" + selectedOrders.length,
      buttons: [
        {
          label: "Так",
          onClick: async () => {
            await sendData();
          },
        },
        {
          label: "Ні",
          onClick: () => {},
        },
      ],
    });
  }

  return (
    <div className={s.manualMessageDispatchContainer}>
      <div className={s.content}>
        <ManualDispatchContent
          setData={setData}
          data={data}
          loadDefault={loadDefault}
        />
      </div>
      <div className={s.controls}>
        <button
          disabled={isBlocked}
          className={"btn blue"}
          onClick={() => controller.closeModal()}
        >
          Скасувати
        </button>
        <button
          disabled={isBlocked}
          className={"btn green"}
          onClick={() => dispatchMessage()}
        >
          Надіслати
        </button>
      </div>
    </div>
  );
};
export default ManualMessageDispatch;
