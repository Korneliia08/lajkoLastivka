import style from "./MarketplaceBlock.module.scss";
import {useNavigate} from "react-router-dom";
import api from "../../../../providers/interceptors/refreshToken.interceptor.js";
import React, {useState} from "react";
import {confirmAlert} from 'react-confirm-alert';
import {CiHeart} from "react-icons/ci";
import Toggle from "react-toggle";
import {FaArrowRightLong} from "react-icons/fa6";
import {MdDeleteOutline} from "react-icons/md";
import MarketplaceMiniMessSendChar from "./marketplaceMiniMessSendChar/MarketplaceMiniMessSendChar.jsx";

function MarketplaceBlock({data, fetchData}) {
    const navigate = useNavigate();

    const [isEnable, setEnable] = useState(data.isEnabled)
    const [loading, setLoading] = useState(false)


    function displayInformation() {
        navigate("./" + data.id);
    }

    async function deleteMarketplace() {
        try {
            confirmAlert({
                title: 'Видалення магазину',
                message: 'Ви напевно хочете видалити магазин: ' + data.name,
                buttons: [
                    {
                        label: 'Так',
                        onClick: async () => {
                            await api.delete(`stores/${data.id}`);
                            fetchData()
                        }
                    },
                    {
                        label: 'Ні',
                        onClick: () => {
                        }
                    }
                ]
            });


        } catch (err) {
            console.log(err);
        }
    }


    async function handleToggleStore($event) {
        try {
            setLoading(true)
            const resp = await api.patch(`/stores/state/${data.id}`, {state: $event.target.checked})
            setEnable(resp.data)
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    return <div className={style.blockOfShop}>
        <div className={style.top}>
            <div className={style.container}>
                {data.logo && <img src={data.logo} alt="" className={style.imageStyle}/>}
                <div className={style.blockForTitle}>
                    <h4 className={style.mainTitle}>{data.name}</h4>
                    <h5 className={style.titleStore}>Rozetka store</h5>
                </div>
                <div className={style.blockForDeleteAndToggle}>
                    <Toggle
                        disabled={loading}
                        // defaultChecked={this.state.soupIsReady}
                        icons={{
                            checked: <CiHeart className={style.iconHeart}/>,
                            unchecked: null,
                        }}
                        checked={isEnable}
                        className='styleOfToggle'
                        onChange={handleToggleStore}
                    />
                    <MdDeleteOutline className={style.deleteIc} onClick={deleteMarketplace}/>
                </div>
            </div>
        </div>
        <div className={style.blockForContantAndStatistic}>
            <p className={style.describe}>lorem lore lorem rgisjer hrt ugtrgih gr8 ywghrwb rg8th t89g irbir uhebgjer or
                ebg
                ergghre gwhusg regb</p>
            <div className={style.blockForStatistic}>
                <span>К-сть надісланих прохань про відгук</span>
                <MarketplaceMiniMessSendChar storeId={data.id}/>
            </div>
        </div>
        <div className={style.blockForBtn}>
            <button className={style.btnSettings} onClick={displayInformation}>Переглянути магазин
                <FaArrowRightLong className={style.arrowIc}/>
            </button>
        </div>
    </div>
}

export default MarketplaceBlock
