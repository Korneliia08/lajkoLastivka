import s from "./TitleOfShop.module.scss";
import logo from "./../../../../../../../assets/informationOfMarketPlace/rozetkaLogo.png";


const TitleOfShop = ({...props}) => {
    return (
        <div className={s.titleOfShopContainer}>
            <img src={logo} alt="image of store" className={s.logoImg}/>
            <div className={s.rightBlock}>
                <h4 className={s.mainTitle}>Rozetka</h4>
                <h3 className={s.title}>rozetka store</h3>
            </div>
        </div>
    )
}
export default TitleOfShop;
