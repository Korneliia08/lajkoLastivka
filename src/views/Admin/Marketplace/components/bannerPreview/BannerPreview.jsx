import s from "./BannerPreview.module.scss";


const BannerPreview = ({data}) => {
    return (
        <div className={s.bannerPreviewContainer}>

            <img src={data.bannerImg} className={s.banner}/>
            {data.logoImg && <img src={data.logoImg} className={s.logo}/>}

        </div>
    )
}
export default BannerPreview;
