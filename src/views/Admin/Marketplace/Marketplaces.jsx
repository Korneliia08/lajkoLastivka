import style from "./Marketplaces.module.scss";
import {useNavigate} from "react-router-dom";
import MarketplaceBlock from "./components/MarketplaceBlock.jsx";
import {useEffect, useState} from "react";
import api from "../../../providers/interceptors/refreshToken.interceptor.js";
import PanelTitle from "../../../components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";

import InfoTile from "../../../components/ui/statisitc/infoTile/InfoTile.jsx";
import ListBlock from "../../../components/ui/listBlock/ListBlock.jsx";

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
        <>
            <PanelTitle title={'Маркетплейси:'} subTitle={'See your marketplaces'}/>
            <OutletPanelScroll>

                <div className={style.topRow}>

                    <InfoTile/>
                    <InfoTile/>
                    <InfoTile/>
                    <InfoTile/>
                </div>
                <ListBlock title={'Marketplaces list'}>

                    <div className={style.container}>
                        <h3 className={style.title}></h3>
                        <div className={style.containerForShops}>

                            {allMarkets.map((market) => <MarketplaceBlock fetchData={fetchData} data={market} index={market.id} key={market.id}/>)}
                        </div>
                        <div className={style.blockForBtn}>
                            <button className={style.btnConnectShop} onClick={displayAddShop}>Підключити магазин</button>
                        </div>
                    </div>
                </ListBlock>
            </OutletPanelScroll>
        </>
    )
}

export default Marketplaces;
