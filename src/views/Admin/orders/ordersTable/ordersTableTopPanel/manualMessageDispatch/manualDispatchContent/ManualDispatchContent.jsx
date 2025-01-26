import s from "./ManualDispatchContent.module.scss";
import InputFile from "../../../../../../../components/ui/InputFile/InputFile.jsx";
import style from "../../../../../Marketplace/MarketplaceForm/MarketplaceForm.module.scss";
import BannerPreview from "../../../../../Marketplace/components/bannerPreview/BannerPreview.jsx";


const ManualDispatchContent = ({data, setData, ...props}) => {

    return (
        <div className={s.manualDispatchContentContainer}>
            <label>Messsage content:</label>
            <br/>
            <textarea onChange={(event) => setData({...data, message: event.target.value})}></textarea>
            <InputFile label={"Оберіть тло для хедера"}
                       initialImage={data.imageData} onChange={(event) => setData({...data, imageData: event.base64})}/>
            <br/>
            <InputFile label={"Оберіть лого"}
                       initialImage={data.imageLogoData} onChange={(event) => setData({...data, imageLogoData: event.base64})}/>
            <span className={style.titleIForm}>Перегляд хедера</span>
            <BannerPreview data={{bannerImg: data.imageDatavi, logoImg: data.imageLogoData}}/>

        </div>
    )
}
export default ManualDispatchContent;
