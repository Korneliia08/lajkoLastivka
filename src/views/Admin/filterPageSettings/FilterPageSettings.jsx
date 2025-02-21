import { useEffect, useState } from "react";
import useFetch from "@hooks/useFetch.js";
import api from "@/providers/interceptors/refreshToken.interceptor.js";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import s from "./FilterPageSettings.module.scss";
import { FaRegSave } from "react-icons/fa";
import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import FilterPageSettingsSelectParketplace from "@/views/Admin/filterPageSettings/filterPageSettingsSelectParketplace/FilterPageSettingsSelectParketplace.jsx";

const TextAreaBlock = ({ title, description, value, setValue }) => {
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
              "preview",
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
  }

  return (
    <div>
      <div className={s.titleBig}>
        <PanelTitle
          inner={true}
          title={"Управління контентом:"}
          subTitle={
            "У цій вкладці можна легко змінювати або додавати контент..."
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
        <div className={s.containerForBlocks}>
          <TextAreaBlock
            title="Сторінка фільтрації"
            description="Ця сторінка дозволяє клієнту оцінити замовлення за п'ятизірковою системою."
            value={firstPageContent}
            setValue={setFirstPageContent}
          />
          <TextAreaBlock
            title="Сторінка подяки та інструкції"
            description="Ця сторінка відображається клієнтам, які оцінили замовлення на 4 або 5 зірок."
            value={successPageContent}
            setValue={setSuccessPageContent}
          />
          <TextAreaBlock
            title="Сторінка для написання відгуку"
            description="Будь ласка, введіть заголовок для цієї сторінки."
            value={commentWritePageContent}
            setValue={setCommentWritePageContent}
          />
          <TextAreaBlock
            title="Сторінка для написання відгуку"
            description="Будь ласка, введіть текст..."
            value={commentWriteTextAreaTitlePageContent}
            setValue={setCommentWriteTextAreaTitlePageContent}
          />
          <TextAreaBlock
            title="Сторінка подяки за внутрішній відгук"
            description="Цей контент представляє сторінку подяки..."
            value={commentSendPageContent}
            setValue={setCommentSendPageContent}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPageSettings;
