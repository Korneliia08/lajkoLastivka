import s from "./PageFilterChooseStarsPreview.module.scss";
import s2 from "./../../../../../PageFilter/PageFilter.module.scss";
import BannerPreview from "../../../components/bannerPreview/BannerPreview.jsx";
import PageFilterChooseStars from "../../../../../PageFilter/components/pageFilterChooseStars/PageFilterChooseStars.jsx";
import {useModalManager} from "../../../../../../hooks/modalManager.js";
import MyModal from "../../../../../../components/features/myModal/MyModal.jsx";
import cn from "../../../../../../functions/cn.js";


const PageFilterChooseStarsPreview = ({bannerImg, logoImg}) => {
    const {openModal, closeModal, controller: controller} = useModalManager();

    return (
        <>

            <span onClick={() => openModal('pageFilterStarsPreview')} className={s.contentInBlock}>Сторінка фільтрації</span>
         
            <MyModal options={{
                defaultClose: true,
                headerTitle: "Сторінка фільтрації"
            }}
                     controller={controller} name={'pageFilterStarsPreview'}>
                <div className={cn(s.pageFilterChooseStarsPreviewContainer, s2.container)}>
                    <BannerPreview data={{bannerImg, logoImg}} style={{width: '100%', maxWidth: 'none'}}/>
                    <p className={s2.titleOfShop}>Магазин - lorem impsum</p>
                    <p className={s2.productTitle} style={{maxWidth: '100%'}}>{'lorem impsum'}</p>
                    <PageFilterChooseStars stars={3} sendStars={() => {
                    }} setStars={() => {
                    }}/>
                </div>
            </MyModal>


        </>
    )
}
export default PageFilterChooseStarsPreview;
