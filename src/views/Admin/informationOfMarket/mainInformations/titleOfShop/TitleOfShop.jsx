import s from "./TitleOfShop.module.scss";
import noImage from "./../../../../../assets/images/noImage.svg";

const TitleOfShop = ({ store, ...props }) => {
  return (
    <div className={s.titleOfShopContainer}>
      <img
        src={store.logo && store.logo.length > 3 ? store.logo : noImage}
        alt="image of store"
        className={s.logoImg}
      />
      <div className={s.rightBlock}>
        <h4 className={s.mainTitle}>{store.name}</h4>
        <h3 className={s.title}>rozetka store</h3>
      </div>
    </div>
  );
};
export default TitleOfShop;
