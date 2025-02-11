import style from "./PageFilterBanner.module.scss";

const PageFilterBanner = ({
  imagesManual = { logo: "", baner: "" },
  data,
  ...props
}) => {
  return (
    <header className={style.blockForHeader}>
      <img
        src={
          imagesManual.logo
            ? import.meta.env.VITE_APP_API +
              "/messages/imageFromFile/" +
              btoa(imagesManual.logo)
            : data.order.store.bannerImg
        }
        alt="bannerImg"
        className={style.imgOfShop}
      />
      <div className={style.circleForLogo}>
        <img
          src={
            imagesManual.banner
              ? import.meta.env.VITE_APP_API +
                "/messages/imageFromFile/" +
                btoa(imagesManual.banner)
              : data.order.store.logoImg
          }
          alt="logoImg"
          className={style.logoOgShopImg}
        />
      </div>
    </header>
  );
};
export default PageFilterBanner;
