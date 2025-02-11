import React, {useEffect, useState} from "react";
import s from "./ManualDispatchContent.module.scss";
import LoadImageFromComputer from "@/components/ui/loadImageFromComputer/LoadImageFromComputer.jsx";
import {useSelector} from "react-redux";

const ManualDispatchContent = ({data, setData, loadDefault, ...props}) => {
    const selectedOrders = useSelector((state) => state.orders.selectedOrders);
    const [keepInMemory, setKeepInMemory] = useState(false);

    useEffect(() => {
        // Sprawdzanie czy dane są zapisane w localStorage
        const savedMessage = localStorage.getItem("message");
        const imageData = localStorage.getItem("bannerImg");
        const imageLogoData = localStorage.getItem("logoImg");
        const savedKeepInMemory = JSON.parse(localStorage.getItem("keepInMemory"));

        if (savedMessage && imageData && imageLogoData) {
            setData({
                ...data,
                message: savedMessage,
                imageLogoData: imageLogoData,
                imageData: imageData,
            });
        }

        if (savedKeepInMemory) {
            setKeepInMemory(savedKeepInMemory);
        }
    }, []);

    useEffect(() => {
        if (keepInMemory) {
            // Zapisz dane do localStorage
            localStorage.setItem("message", data.message);
            localStorage.setItem("logoImg", data.imageLogoData);
            localStorage.setItem("bannerImg", data.imageData);
            localStorage.setItem("keepInMemory", JSON.stringify(keepInMemory));
            console.log(keepInMemory);
        } else {
            // Jeśli checkbox nie jest zaznaczony, usuwamy dane
            localStorage.removeItem("message");
            localStorage.removeItem("logoImg");
            localStorage.removeItem("bannerImg");
            localStorage.removeItem("keepInMemory");
        }
    }, [keepInMemory, data.message, data.imageData, data.imageLogoData]);

    const handleCheckboxChange = () => {
        setKeepInMemory(!keepInMemory);
    };

    return (
        <div className={s.manualDispatchContentContainer}>
            <div className={s.blockForTitle}>
                <h2 className={s.title}>Розсилка
                    повідомлень <span className={s.titleOfItem}>(вибрані замовлення:</span>
                    <span className={s.value}>{selectedOrders.length})</span></h2>
                <div className={s.information}>
                    <span className={s.describe}>Під час першого відображення завантажується стандартний шаблон, створений при підключенні магазину. Ви можете його редагувати, зберігати або відновлювати стандартні налаштування.</span>
                    <button className={s.btnKeep} onClick={loadDefault}>
                        Відновити типові налаштування
                    </button>
                </div>
            </div>

            <div className={s.containerForLoad}>
                <LoadImageFromComputer
                    onChange={(event) => setData({...data, imageLogoData: event})}
                    title={"Лого"}
                    value={data.imageLogoData}
                    describe={"Лого буде відображено на хедері"}
                />
                <LoadImageFromComputer
                    onChange={(event) => setData({...data, imageData: event})}
                    title={"Тло для хедера"}
                    value={data.imageData}
                    describe={"Тло використовуватиметься у хедері"}
                />
            </div>

            <div className={s.containerForTextarea}>
                <span className={s.title}>Шаблон повідомлення</span>
                <textarea
                    className={s.textareaStyle}
                    value={data.message}
                    onChange={(event) =>
                        setData({...data, message: event.target.value})
                    }
                ></textarea>
                <span className={s.memorySpan}>
          Зберегти у пам’яті:&nbsp;&nbsp;&nbsp;
                    <input
                        type="checkbox"
                        checked={keepInMemory}
                        onChange={handleCheckboxChange}
                    />
        </span>
                <br/>
            </div>
        </div>
    );
};

export default ManualDispatchContent;
