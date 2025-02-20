import s from "./FilterPageSettings.module.scss";
import {useParams} from "react-router-dom";
import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "@/components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import FilterPageSettingsSelectParketplace
    from "@/views/Admin/filterPageSettings/filterPageSettingsSelectParketplace/FilterPageSettingsSelectParketplace.jsx";
import {useQuill} from "react-quilljs";
import {useEffect} from "react";
import useFetch from "@hooks/useFetch.js";
import api from "@/providers/interceptors/refreshToken.interceptor.js";
import {FaRegSave} from "react-icons/fa";

const FilterPageSettings = ({...props}) => {
    const {id} = useParams();
    const {quill: firstPageQuill, quillRef: firstPageRef} = useQuill();
    const {quill: successPageQuill, quillRef: successPageRef} = useQuill();
    const {quill: commentSendPageQuill, quillRef: commentSendPageRef} =
        useQuill();
    const {quill: commentWritePageQuill, quillRef: commentWritePageRef} =
        useQuill();
    const {
        quill: commentWriteTextAreaTitlePageQuill,
        quillRef: commentWriteTextAreaTitlePageRef,
    } = useQuill();
    const {data} = useFetch(`/stores/filterPageConfig/${id}`);

    useEffect(() => {
        if (
            id != undefined &&
            firstPageQuill &&
            commentWriteTextAreaTitlePageQuill &&
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
                title={"Управління контентом:"}
                subTitle={
                    "У цій вкладці можна легко змінювати або додавати контент, який відображатиметься на сторінках, де клієнти залишають відгуки про товар."
                }
                buttonText={"Зберегти"}
                onClick={sendData}
                buttonIcon={<FaRegSave/>}
            />
            <div className={s.filterPageSettingsContainer}>
                <div className={s.selectMarketPlace}>
                    <FilterPageSettingsSelectParketplace/>
                </div>
                <div className={s.containerForBlocks}>
                    <div className={s.block}>
                        <div className={s.titleContainer}>
                            <span className={s.title}>Сторінка фільтрації</span>
                            <span className={s.describe}>Там де клієнт обирає кількість зірочок</span>
                        </div>
                        <div className={s.quillContainer} style={{width: 500, height: 300}}>
                            <div ref={firstPageRef}/>
                        </div>
                    </div>
                    <div className={s.block}>
                        <div className={s.titleContainer}>
                            <span className={s.title}>Сторінка подяки та інструкції</span>
                            <span className={s.describe}>Ця сторінка відображається клієнтам, які оцінили замовлення на 4 або 5 зірок.
                                Вона містить подяку за оцінку та інструкцію, як залишити детальний відгук на ROZETKA.</span>
                        </div>
                        <div className={s.quillContainer} style={{width: 500, height: 300}}>
                            <div ref={successPageRef}/>
                        </div>
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
                            style={{width: 500, height: 300}}
                        >
                            <div ref={commentWritePageRef}/>
                        </div>
                        <div
                            className={s.quillContainer}
                            style={{width: 500, height: 300}}
                        >
                            <div ref={commentWriteTextAreaTitlePageRef}/>
                        </div>
                    </div>
                </div>

                <div className={s.block}>
                    <div className={s.titleContainer}>
                        <span className={s.title}>Comment sent</span>
                        <span className={s.describe}>Tam gdzie instrukcja</span>
                    </div>

                    <div className={s.quillContainer} style={{width: 500, height: 300}}>
                        <div ref={commentSendPageRef}/>
                    </div>
                </div>
            </div>
        </OutletPanelScroll>
    );
};
export default FilterPageSettings;
