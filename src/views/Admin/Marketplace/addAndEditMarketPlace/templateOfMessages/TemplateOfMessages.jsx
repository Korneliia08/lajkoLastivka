import s from "./TemplateOfMessages.module.scss";
import SubtitleInForm from "@/views/Admin/Marketplace/addAndEditMarketPlace/subtitleInForm/SubtitleInForm.jsx";
import LoadImageFromComputer from "@/components/ui/loadImageFromComputer/LoadImageFromComputer.jsx";
import SecondPart from "@/views/Admin/Marketplace/addAndEditMarketPlace/templateOfMessages/secondPart/SecondPart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { marketplaceSetField } from "@/views/Admin/Marketplace/addAndEditMarketPlace/marketplaceFormSlice.js";

const TemplateOfMessages = ({ ...props }) => {
  const dispatch = useDispatch();

  const { viberLogoImg, viberBannerImg } = useSelector(
    (state) => state.marketplaceForm,
  );

  return (
    <div className={s.templateOfMessagesContainer}>
      <SubtitleInForm
        title={"Шаблони повідомлень"}
        describe={
          "Налаштуйте шаблони для автоматичних повідомлень клієнтам із проханням оцінити замовлення."
        }
      />
      <div className={s.containerForTemplateOfMessage}>
        <LoadImageFromComputer
          title={"Лого"}
          name={"viberLogoImg"}
          value={viberLogoImg}
          onChange={(file) =>
            dispatch(marketplaceSetField({ name: "viberLogoImg", value: file }))
          }
          describe={"Лого буде відображено на хедері"}
        />
        <LoadImageFromComputer
          title={"Тло для хедера"}
          name={"viberBannerImg"}
          value={viberBannerImg}
          onChange={(file) =>
            dispatch(
              marketplaceSetField({ name: "viberBannerImg", value: file }),
            )
          }
          describe={"Тло використовуватиметься у хедері"}
        />
      </div>
      <SecondPart />
    </div>
  );
};
export default TemplateOfMessages;
