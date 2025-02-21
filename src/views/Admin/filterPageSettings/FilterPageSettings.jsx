import { useEffect, useState } from "react";
import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import useFetch from "@hooks/useFetch.js";
import api from "@/providers/interceptors/refreshToken.interceptor.js";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import s from "./FilterPageSettings.module.scss";
import { FaRegSave } from "react-icons/fa";
import WebsiteCustomerPreview from "@/components/features/websiteCustomerPreview/WebsiteCustomerPreview.jsx";
import FilterPageSettingsSelectParketplace from "@/views/Admin/filterPageSettings/filterPageSettingsSelectParketplace/FilterPageSettingsSelectParketplace.jsx";

const TextAreaBlock = ({ title, description, value, setValue }) => {
  value = typeof value == "string" ? value : "";
  return (
    <div className={s.block}>
      <div className={s.titleContainer}>
        <span className={s.title}>{title}</span>
        <span className={s.describe}>{description}</span>
      </div>
      <SunEditor
        setOptions={{
          height: 200,

          buttonList: [
            [
              "undo",
              "redo",
              "font",
              "fontSize",
              "formatBlock",
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
              "fontColor",
              "hiliteColor",
              "textStyle",
              "removeFormat",
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              "lineHeight",
            ],
          ],
          defaultFontSize: "14px",
          defaultFont: "Arial",
        }}
        setContents={value} // Ustawienie początkowej zawartości
        onKeyUp={(content) => setValue(content)}
        onChange={(content) => setValue(content)}
      />
    </div>
  );
};

const FilterPageSettings = () => {
  const [refreshCount, setRefreshCount] = useState(0);
  const { id } = useParams();
  const { data } = useFetch(`/stores/filterPageConfig/${id}`);

  // Inicjalizacja stanu dla zawartości stron
  const [firstPageContent, setFirstPageContent] = useState("");
  const [successPageContent, setSuccessPageContent] = useState("");
  const [commentSendPageContent, setCommentSendPageContent] = useState("");
  const [commentWritePageContent, setCommentWritePageContent] = useState("");
  const [
    commentWriteTextAreaTitlePageContent,
    setCommentWriteTextAreaTitlePageContent,
  ] = useState("");

  useEffect(() => {
    if (data?.filterPageContent) {
      setFirstPageContent(data.filterPageContent.welcomePage || "");
      setSuccessPageContent(data.filterPageContent.successPage || "");
      setCommentSendPageContent(
        data.filterPageContent.commentSendPageQuill || "",
      );
      setCommentWritePageContent(data.filterPageContent.writeCommentPage || "");
      setCommentWriteTextAreaTitlePageContent(
        data.filterPageContent.writeCommentLabelPage || "",
      );
    }
  }, [data]);

  // Funkcja do wysyłania danych
  async function sendData() {
    try {
      const dataToSend = {
        filterPageContent: {
          welcomePage: firstPageContent,
          successPage: successPageContent,
          writeCommentPage: commentWritePageContent,
          writeCommentLabelPage: commentWriteTextAreaTitlePageContent,
          commentSendPageQuill: commentSendPageContent,
        },
      };
      await api.post(`/stores/filterPageConfig/${id}`, dataToSend);
      toast.success("Дані збережені");
    } catch (err) {
      toast.error("Виникла помилка");
    }
    setRefreshCount(refreshCount + 1);
  }

  return (
    <div>
      <div className={s.titleBig}>
        <PanelTitle
          inner={true}
          title={"Управління контентом:"}
          subTitle={
            "У цій вкладці можна легко змінювати або додавати контент, а завдяки віртуальному телефону — бачити, як він змінюється на різних сторінках. Щоб переглянути всі сторінки, потрібно клацати по цьому телефоні."
          }
          buttonText={"Зберегти"}
          onClick={sendData}
          buttonIcon={<FaRegSave />}
        />
      </div>
      <div className={s.filterPageSettingsContainer}>
        <div className={s.selectMarketPlace}>
          <FilterPageSettingsSelectParketplace />
        </div>
        <div className={s.bottom}>
          <div className={s.containerForBlocks}>
            <TextAreaBlock
              title="Сторінка фільтрації"
              description="Ця сторінка дозволяє клієнту оцінити замовлення за п'ятизірковою системою."
              value={firstPageContent}
              setValue={setFirstPageContent}
            />
            <TextAreaBlock
              title="Сторінка подяки та інструкції"
              description="Ця сторінка відображається клієнтам, які оцінили замовлення на 4 або 5 зірок. Вона містить подяку за оцінку та інструкцію, як залишити детальний відгук на ROZETKA."
              value={successPageContent}
              setValue={setSuccessPageContent}
            />
            <TextAreaBlock
              title="Сторінка для написання відгуку"
              description="Ця сторінка містить текстове поле для написання внутрішнього відгуку. Будь ласка, введіть нижче лише заголовок для цієї сторінки."
              value={commentWritePageContent}
              setValue={setCommentWritePageContent}
            />
            <TextAreaBlock
              title="Сторінка для написання відгуку"
              description="Ця сторінка містить текстове поле для написання внутрішнього відгуку. Будь ласка, введіть нижче лише контент,який має відображатися біля  текстового поля на відгук."
              value={commentWriteTextAreaTitlePageContent}
              setValue={setCommentWriteTextAreaTitlePageContent}
            />
            <TextAreaBlock
              title="Сторінка подяки за внутрішній відгук"
              description="Ця сторінка відображає подяку користувачеві за залишений внутрішній відгук, підтверджує отримання оцінки та висловлює вдячність за зворотний зв’язок."
              value={commentSendPageContent}
              setValue={setCommentSendPageContent}
            />
          </div>
          <div className={s.preview}>
            <WebsiteCustomerPreview refreshCount={refreshCount} storeId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPageSettings;
