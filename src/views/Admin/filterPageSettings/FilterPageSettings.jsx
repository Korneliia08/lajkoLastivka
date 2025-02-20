import s from "./FilterPageSettings.module.scss";
import { useParams } from "react-router-dom";
import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "@/components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import FilterPageSettingsSelectParketplace from "@/views/Admin/filterPageSettings/filterPageSettingsSelectParketplace/FilterPageSettingsSelectParketplace.jsx";
import { useQuill } from "react-quilljs";
import { useEffect } from "react";
import useFetch from "@hooks/useFetch.js";
import api from "@/providers/interceptors/refreshToken.interceptor.js";

const FilterPageSettings = ({ ...props }) => {
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
      firstPageQuill &&
      commentWriteTextAreaTitlePageQuill &&
      successPageQuill &&
      commentSendPageQuill &&
      commentWritePageQuill &&
      commentWriteTextAreaTitlePageQuill
    ) {
      firstPageQuill.clipboard.dangerouslyPasteHTML(
        "Наскільки Ви задоволені покупкою?",
      );
      successPageQuill.clipboard.dangerouslyPasteHTML(
        data.filterPageContent.welcomePage,
      );

      commentSendPageQuill.clipboard.dangerouslyPasteHTML(
        data.filterPageContent.successPage,
      );

      commentWritePageQuill.clipboard.dangerouslyPasteHTML(
        data.filterPageContent.writeCommentPage,
      );

      commentWriteTextAreaTitlePageQuill.clipboard.dangerouslyPasteHTML(
        data.filterPageContent.writeCommentLabelPage,
      );
      commentSendPageQuill.clipboard.dangerouslyPasteHTML(
        data.filterPageContent.welcomePage,
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
    const dataToSend = {
      filterPageContent: {
        welcomePage: firstPageQuill.getSemanticHTML(),
        successPage: successPageQuill.getSemanticHTML(),
        writeCommentPage: commentWritePageQuill.getSemanticHTML(),
        writeCommentLabelPage:
          commentWriteTextAreaTitlePageQuill.getSemanticHTML(),
        commentSendPageQuill: firstPageQuill.getSemanticHTML(),
      },
    };
    await api.post(`/stores/filterPageConfig/${id}`, dataToSend);
  }
  return (
    <OutletPanelScroll>
      <PanelTitle
        inner={true}
        title={"Відгуки:"}
        subTitle={
          "Перегляд користувачів, які залишили відгук, та відображення їхніх відгуків у нашій внутрішній системі та на розетці."
        }
      />
      <div className={s.filterPageSettingsContainer}>
        <div className={s.selectMarketPlace}>
          <FilterPageSettingsSelectParketplace />
          <button onClick={sendData}>Send</button>
        </div>
        <div className={s.block}>
          <div className={s.titleContainer}>
            <span className={s.title}>Strona główna</span>
            <span className={s.describe}>Tam gdzie gwiazdki</span>
          </div>
          <div className={s.quillContainer} style={{ width: 500, height: 300 }}>
            <div ref={firstPageRef} />
          </div>
        </div>
        <div className={s.block}>
          <div className={s.titleContainer}>
            <span className={s.title}>Sukces ppage</span>
            <span className={s.describe}>Tam gdzie instrukcja</span>
          </div>
          <div className={s.quillContainer} style={{ width: 500, height: 300 }}>
            <div ref={successPageRef} />
          </div>
        </div>

        <div className={s.block}>
          <div className={s.titleContainer}>
            <span className={s.title}>Comment write</span>
            <span className={s.describe}>Tam gdzie instrukcja</span>
          </div>
          <div className={s.rowQuills}>
            <div
              className={s.quillContainer}
              style={{ width: 500, height: 300 }}
            >
              <div ref={commentWritePageRef} />
            </div>
            <div
              className={s.quillContainer}
              style={{ width: 500, height: 300 }}
            >
              <div ref={commentWriteTextAreaTitlePageRef} />
            </div>
          </div>
        </div>

        <div className={s.block}>
          <div className={s.titleContainer}>
            <span className={s.title}>Comment sent</span>
            <span className={s.describe}>Tam gdzie instrukcja</span>
          </div>

          <div className={s.quillContainer} style={{ width: 500, height: 300 }}>
            <div ref={commentSendPageRef} />
          </div>
        </div>
      </div>
    </OutletPanelScroll>
  );
};
export default FilterPageSettings;
