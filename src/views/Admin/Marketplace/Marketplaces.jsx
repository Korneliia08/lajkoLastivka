import style from "./Marketplaces.module.scss";
import {useNavigate} from "react-router-dom";
import MarketplaceBlock from "./components/MarketplaceBlock.jsx";

function Marketplaces() {
    const navigate = useNavigate();

    function displayAddShop() {
        navigate("./0");
    }

    return (
        <div className={style.container}>
            <h3 className={style.title}>Маркетплейси:</h3>
            <div className={style.containerForShops}>
                <MarketplaceBlock data={{name: "Зара", id: 1}}/>
                <MarketplaceBlock data={{name: "Бершка", id: 2}}/>
                <MarketplaceBlock data={{name: "Ресервед", id: 3}} index={3}/>
                <MarketplaceBlock data={{name: "Страдіваріус", id: 4}} index={4}/>
            </div>
            <div className={style.blockForBtn}>
                <button className={style.btnConnectShop} onClick={displayAddShop}>Підключити магазин</button>
            </div>
        </div>
    )
}

export default Marketplaces;
