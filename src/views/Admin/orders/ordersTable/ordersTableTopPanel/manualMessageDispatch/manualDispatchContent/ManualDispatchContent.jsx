import React, { useEffect, useState } from "react";
import s from "./ManualDispatchContent.module.scss";
import LoadImageFromComputer from "@/components/ui/loadImageFromComputer/LoadImageFromComputer.jsx";
import { useSelector } from "react-redux";

const ManualDispatchContent = ({ data, setData, loadDefault, ...props }) => {
  const selectedOrders = useSelector((state) => state.orders.selectedOrders);
  const [keepInMemory, setKeepInMemory] = useState(false);

  useEffect(() => {
    // Sprawdzanie czy dane są zapisane w localStorage
    const savedMessage = localStorage.getItem("message");
    const logoImg = localStorage.getItem("logoImg");
    const bannerImg = localStorage.getItem("bannerImg");
    const savedKeepInMemory = JSON.parse(localStorage.getItem("keepInMemory"));

    if (savedMessage && logoImg && bannerImg) {
      setData({ ...data, message: savedMessage, logoImg, bannerImg });
    }

    if (savedKeepInMemory) {
      setKeepInMemory(savedKeepInMemory);
    }
  }, []);

  useEffect(() => {
    if (keepInMemory) {
      // Zapisz dane do localStorage
      localStorage.setItem("message", data.message);
      localStorage.setItem("logoImg", data.logoImg);
      localStorage.setItem("bannerImg", data.bannerImg);
      localStorage.setItem("keepInMemory", JSON.stringify(keepInMemory));
    } else {
      // Jeśli checkbox nie jest zaznaczony, usuwamy dane
      localStorage.removeItem("message");
      localStorage.removeItem("logoImg");
      localStorage.removeItem("bannerImg");
      localStorage.removeItem("keepInMemory");
    }
  }, [keepInMemory, data.message, data.bannerImg, data.logoImg]);

  const handleCheckboxChange = () => {
    setKeepInMemory(!keepInMemory);
  };

  return (
    <div className={s.manualDispatchContentContainer}>
      <div className={s.blockForTitle}>
        <h2 className={s.title}>Розсилка повідомлень</h2>
        <div className={s.information}>
          <span className={s.titleOfItem}>Вибрані замовлення:</span>
          <span className={s.value}>{selectedOrders.length}</span>
        </div>
      </div>

      <div className={s.containerForLoad}>
        <LoadImageFromComputer
          onChange={(event) => setData({ ...data, imageData: event })}
          title={"Лого"}
          value={data.logoImg}
          describe={"Лого буде відображено на хедері"}
        />
        <LoadImageFromComputer
          onChange={(event) => setData({ ...data, imageLogoData: event })}
          title={"Тло для хедера"}
          value={data.bannerImg}
          describe={"Тло використовуватиметься у хедері"}
        />
      </div>

      <div className={s.containerForTextarea}>
        <span className={s.title}>Шаблон повідомлення</span>
        <textarea
          className={s.textareaStyle}
          value={data.message}
          onChange={(event) =>
            setData({ ...data, message: event.target.value })
          }
        ></textarea>
        <span>
          Keep in memory:&nbsp;&nbsp;&nbsp;
          <input
            type="checkbox"
            checked={keepInMemory}
            onChange={handleCheckboxChange}
          />
          <button onClick={loadDefault}>Load default</button>
        </span>
      </div>
    </div>
  );
};

export default ManualDispatchContent;
