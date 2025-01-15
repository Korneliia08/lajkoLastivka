import s from "./BannerPreview.module.scss";


const BannerPreview = ({data, style}) => {
    return (
        <div className={s.bannerPreviewContainer} style={style}>

            <img src={data.bannerImg} className={s.banner}/>
            {data.logoImg && <img src={data.logoImg} className={s.logo}/>}

        </div>
    )
}
export default BannerPreview;
