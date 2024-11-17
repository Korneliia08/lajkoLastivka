import style from "./MarketplaceBlock.module.scss";
import Toggle from "react-toggle";
import {CiHeart} from "react-icons/ci";
import {MdModeEditOutline} from "react-icons/md";
import {useNavigate} from "react-router-dom";

function MarketplaceBlock({data}) {
    const navigate = useNavigate();

    function displayEdit() {
        navigate("./" + data.id);
    }

    return <div className={style.blockOfShop}>
        <span className={style.titleOfShop}>{data.name}</span>
        <div className={style.blockForOptions}>
            <Toggle
                // defaultChecked={this.state.soupIsReady}
                icons={{
                    checked: <CiHeart className={style.iconHeart}/>,
                    unchecked: null,
                }}
                className='styleOfToggle'
                // onChange={this.handleSoupChange}
            />
            <MdModeEditOutline className={style.iconEdit} onClick={displayEdit}/>
        </div>
    </div>

}

export default MarketplaceBlock
