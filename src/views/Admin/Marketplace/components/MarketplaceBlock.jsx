import style from "./MarketplaceBlock.module.scss";
import Toggle from "react-toggle";
import {CiHeart} from "react-icons/ci";
import {MdDeleteSweep, MdModeEditOutline} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import api from "../../../../providers/interceptors/refreshToken.interceptor.js";
import {useState} from "react";
import {confirmAlert} from 'react-confirm-alert';

function MarketplaceBlock({data, fetchData}) {
    const navigate = useNavigate();

    const [isEnable, setEnable] = useState(data.isEnabled)
    const [loading, setLoading] = useState(false)

    function displayEdit() {
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
        <span className={style.titleOfShop}>{data.name}</span>
        <div className={style.blockForOptions}>
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
            <MdModeEditOutline className={style.icon} onClick={displayEdit}/>
            <MdDeleteSweep className={style.icon} onClick={deleteMarketplace}/>
        </div>
    </div>

}

export default MarketplaceBlock
