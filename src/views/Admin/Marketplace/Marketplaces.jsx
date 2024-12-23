import style from "./Marketplaces.module.scss";
import {useNavigate} from "react-router-dom";
import MarketplaceBlock from "./components/MarketplaceBlock.jsx";
import {useEffect, useState} from "react";
import api from "../../../providers/interceptors/refreshToken.interceptor.js";

function Marketplaces() {
    const [allMarkets, setAllMarkets] = useState([]);
    const navigate = useNavigate();

    function displayAddShop() {
        navigate("./0");
    }

    useEffect(() => {
        fetchData()
    }, []);

    function fetchData() {
        api.get("/stores").then(resp => {
            setAllMarkets(resp.data);
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <div className={style.container}>
            <h3 className={style.title}>Маркетплейси:</h3>
            <div className={style.containerForShops}>

                {allMarkets.map((market) => <MarketplaceBlock fetchData={fetchData} data={market} index={market.id} key={market.id}/>)}
            </div>
            <div className={style.blockForBtn}>
                <button className={style.btnConnectShop} onClick={displayAddShop}>Підключити магазин</button>
            </div>
        </div>
    )
}

export default Marketplaces;
