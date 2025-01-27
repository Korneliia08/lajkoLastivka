import s from "./TitleOfShop.module.scss";


const TitleOfShop = ({store, ...props}) => {
    return (
        <div className={s.titleOfShopContainer}>
            <img src={store.logo} alt="image of store" className={s.logoImg}/>
            <div className={s.rightBlock}>
                <h4 className={s.mainTitle}>{store.name}</h4>
                <h3 className={s.title}>rozetka store</h3>
            </div>
        </div>
    )
}
export default TitleOfShop;
