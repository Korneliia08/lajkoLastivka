import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../../../providers/interceptors/refreshToken.interceptor.js";
import PanelTitle from "../../../components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "../../../components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import MarketplaceBlock from "./components/MarketplaceBlock.jsx";
import s from "./Marketplaces.module.scss";
import {FaPlus} from "react-icons/fa";

function Marketplaces() {
    const [allMarkets, setAllMarkets] = useState([]);
    const navigate = useNavigate();

    function displayAddShop() {
        navigate("/admin/marketplaces/edit/0");
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
            <PanelTitle title={'Маркетплейси:'}
                        subTitle={'Усі доступні маркетплейси, які можна переглядати, редагувати та додавати нові у цьому розділі.'}
                        buttonText={"Додати магазин"}
                        buttonIcon={<FaPlus/>}
                        onClick={displayAddShop}/>
            <OutletPanelScroll>
                <div className={s.container}>
                    {allMarkets.map((market) => <MarketplaceBlock fetchData={fetchData} data={market}
                                                                  index={market.id} key={market.id}/>)}
                </div>
            </OutletPanelScroll>
        </>
    )
}

export default Marketplaces;
