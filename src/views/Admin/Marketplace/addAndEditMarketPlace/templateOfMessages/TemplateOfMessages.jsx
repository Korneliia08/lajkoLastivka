import s from "./TemplateOfMessages.module.scss";
import SubtitleInForm from "@/views/Admin/Marketplace/addAndEditMarketPlace/subtitleInForm/SubtitleInForm.jsx";
import LoadImageFromComputer from "@/components/ui/loadImageFromComputer/LoadImageFromComputer.jsx";
import SecondPart from "@/views/Admin/Marketplace/addAndEditMarketPlace/templateOfMessages/secondPart/SecondPart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { marketplaceSetField } from "@/views/Admin/Marketplace/addAndEditMarketPlace/marketplaceFormSlice.js";
import ViberMessagePreview from "@/components/features/viberMessagePreview/ViberMessagePreview.jsx";
import WebsiteCustomerPreview from "@/components/features/websiteCustomerPreview/WebsiteCustomerPreview.jsx";
import { useParams } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

const TemplateOfMessages = ({ ...props }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [preview, setPreview] = useState("viber");
  const { viberLogoImg, viberBannerImg } = useSelector(
    (state) => state.marketplaceForm,
  );
  const state = useSelector((state) => state.marketplaceForm);
  return (
    <div className={s.templateOfMessagesContainer}>
      <SubtitleInForm
        title={"Шаблони повідомлень"}
        describe={
          "Налаштуйте шаблони для автоматичних повідомлень клієнтам із проханням оцінити замовлення."
        }
      />
      <div className={s.containerForTemplateOfMessage}>
        <div className={s.blockForLoad}>
          <LoadImageFromComputer
            title={"Лого"}
            name={"viberLogoImg"}
            value={viberLogoImg}
            onChange={(file) =>
              dispatch(
                marketplaceSetField({ field: "viberLogoImg", value: file }),
              )
            }
            describe={"Лого буде відображено на хедері"}
          />
          <LoadImageFromComputer
            title={"Тло для хедера"}
            name={"viberBannerImg"}
            value={viberBannerImg}
            onChange={(file) =>
              dispatch(
                marketplaceSetField({ field: "viberBannerImg", value: file }),
              )
            }
            describe={"Тло використовуватиметься у хедері"}
          />
        </div>
        <div className={s.horizontalContainer}>
          <div>
            <SecondPart />
          </div>
          <div className={s.ViberMessagePreview}>
            <ToggleButtonGroup
              value={preview}
              exclusive
              color="primary"
              onChange={(event, value) => {
                if (value.length) {
                  setPreview(value);
                }
              }}
              aria-label="text alignment"
            >
              <ToggleButton value="viber" aria-label="left aligned">
                Viber
              </ToggleButton>
              <ToggleButton value="website" aria-label="centered">
                Сторінка фільтра
              </ToggleButton>
            </ToggleButtonGroup>

            <div className={s.preview}>
              {preview === "viber" && (
                <ViberMessagePreview text={state.messageTemplateViber} />
              )}
              {preview === "website" && <WebsiteCustomerPreview storeId={id} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TemplateOfMessages;
