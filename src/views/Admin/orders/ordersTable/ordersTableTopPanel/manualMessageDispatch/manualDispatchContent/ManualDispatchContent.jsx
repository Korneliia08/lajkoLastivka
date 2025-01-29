import s from "./ManualDispatchContent.module.scss";
import LoadImageFromComputer from "@/components/ui/loadImageFromComputer/LoadImageFromComputer.jsx";
import { useSelector } from "react-redux";

const ManualDispatchContent = ({ data, setData, ...props }) => {
  const selectedOrders = useSelector((state) => state.orders.selectedOrders);
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
          describe={"Лого буде відображено на хедері"}
        />
        <LoadImageFromComputer
          onChange={(event) => setData({ ...data, imageLogoData: event })}
          title={"Тло для хедера"}
          describe={"Тло використовуватиметься у хедері"}
        />
      </div>
      <div className={s.containerForTextarea}>
        <span className={s.title}>Шаблон повідомлення</span>
        <textarea
          className={s.textareaStyle}
          onChange={(event) =>
            setData({ ...data, message: event.target.value })
          }
        ></textarea>
      </div>
      {/*<InputFile label={"Оберіть тло для хедера"}*/}
      {/*           initialImage={data.imageData} onChange={(event) => setData({...data, imageData: event.base64})}/>*/}
      {/*<br/>*/}
      {/*<InputFile label={"Оберіть лого"}*/}
      {/*           initialImage={data.imageLogoData}*/}
      {/*           onChange={(event) => setData({...data, imageLogoData: event.base64})}/>*/}
      {/*<BannerPreview*/}
      {/*  data={{ bannerImg: data.imageDatavi, logoImg: data.imageLogoData }}*/}
      {/*/>*/}
    </div>
  );
};
export default ManualDispatchContent;
