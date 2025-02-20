import s from "./FilterPageSettings.module.scss";
import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "@/components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import FilterPageSettingsSelectParketplace from "@/views/Admin/filterPageSettings/filterPageSettingsSelectParketplace/FilterPageSettingsSelectParketplace.jsx";
import { useQuill } from "react-quilljs";
import { useEffect } from "react";
import useFetch from "@hooks/useFetch.js";
import api from "@/providers/interceptors/refreshToken.interceptor.js";
import { FaRegSave } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const QuillBlock = ({ title, description, quillRef }) => (
  <div className={s.block}>
    <div className={s.titleContainer}>
      <span className={s.title}>{title}</span>
      <span className={s.describe}>{description}</span>
    </div>
    <div className={s.quillContainer} style={{ width: "100%", height: 300 }}>
      <div ref={quillRef} />
    </div>
  </div>
);

const FilterPageSettings = () => {
  const { id } = useParams();
  const { quill: firstPageQuill, quillRef: firstPageRef } = useQuill();
  const { quill: successPageQuill, quillRef: successPageRef } = useQuill();
  const { quill: commentSendPageQuill, quillRef: commentSendPageRef } =
    useQuill();
  const { quill: commentWritePageQuill, quillRef: commentWritePageRef } =
    useQuill();
  const {
    quill: commentWriteTextAreaTitlePageQuill,
    quillRef: commentWriteTextAreaTitlePageRef,
  } = useQuill();
  const { data } = useFetch(`/stores/filterPageConfig/${id}`);

  useEffect(() => {
    if (
      id !== undefined &&
      firstPageQuill &&
      successPageQuill &&
      commentSendPageQuill &&
      commentWritePageQuill &&
      commentWriteTextAreaTitlePageQuill &&
      data.filterPageContent
    ) {
      firstPageQuill.clipboard.dangerouslyPasteHTML(
        data.filterPageContent.welcomePage,
      );
      successPageQuill.clipboard.dangerouslyPasteHTML(
        data.filterPageContent.successPage,
      );
      commentWritePageQuill.clipboard.dangerouslyPasteHTML(
        data.filterPageContent.writeCommentPage,
      );
      commentWriteTextAreaTitlePageQuill.clipboard.dangerouslyPasteHTML(
        data.filterPageContent.writeCommentLabelPage,
      );
      commentSendPageQuill.clipboard.dangerouslyPasteHTML(
        data.filterPageContent.commentSendPageQuill,
      );
    }
  }, [
    firstPageQuill,
    successPageQuill,
    commentSendPageQuill,
    commentWritePageQuill,
    commentWriteTextAreaTitlePageQuill,
    data,
  ]);

  async function sendData() {
    try {
      const dataToSend = {
        filterPageContent: {
          welcomePage: firstPageQuill.getSemanticHTML(),
          successPage: successPageQuill.getSemanticHTML(),
          writeCommentPage: commentWritePageQuill.getSemanticHTML(),
          writeCommentLabelPage:
            commentWriteTextAreaTitlePageQuill.getSemanticHTML(),
          commentSendPageQuill: commentSendPageQuill.getSemanticHTML(),
        },
      };
      await api.post(`/stores/filterPageConfig/${id}`, dataToSend);
      toast.success("Дані збережені");
    } catch (err) {
      toast.error("Виникла помилка");
    }
  }

  return (
    <OutletPanelScroll>
      <div className={s.titleBig}>
        <PanelTitle
          inner={true}
          title={"Управління контентом:"}
          subTitle={
            "У цій вкладці можна легко змінювати або додавати контент, який відображатиметься на сторінках, де клієнти залишають відгуки про товар."
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
          <QuillBlock
            title="Сторінка фільтрації"
            description="Там де клієнт обирає кількість зірочок"
            quillRef={firstPageRef}
          />
          <QuillBlock
            title="Сторінка подяки та інструкції"
            description="Ця сторінка відображається клієнтам, які оцінили замовлення на 4 або 5 зірок. Вона містить подяку за оцінку та інструкцію, як залишити детальний відгук на ROZETKA."
            quillRef={successPageRef}
          />
          <QuillBlock
            title="Comment write"
            description="Tam gdzie instrukcja"
            quillRef={commentWritePageRef}
          />
          <QuillBlock
            title="Comment write"
            description="Tam gdzie instrukcja"
            quillRef={commentWriteTextAreaTitlePageRef}
          />
          <QuillBlock
            title="Comment sent"
            description="Tam gdzie instrukcja"
            quillRef={commentSendPageRef}
          />
        </div>
      </div>
    </OutletPanelScroll>
  );
};

export default FilterPageSettings;
