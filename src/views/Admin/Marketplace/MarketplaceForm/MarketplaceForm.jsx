import style from "./MarketplaceForm.module.scss";
import {useParams} from "react-router-dom";
import {CiShop} from "react-icons/ci";
import {FaRegEdit} from "react-icons/fa";

function MarketplaceForm() {
    const {id} = useParams();

    return (
        <div className={style.container}>
            <div className={style.titleOfSubPageBlock}>
                {id === "0" && <>
                    <h3 className={style.title}>Додати магазин</h3>
                    <CiShop className={style.iconOfShopAndEdit}/>
                </>
                }
                {id !== "0" &&
                    <>
                        <h3 className={style.title}>Редагувати магазин</h3>
                        <FaRegEdit className={style.iconOfShopAndEdit}/>
                    </>}

            </div>

            <form className={style.formAddAndEdit}>
                <label htmlFor="store-name" className={style.titleIForm}>Назва магазину</label>
                <input type="text" name="store-name" required placeholder="Введіть назву магазину"
                       className={style.input}/>
                <span className={style.titleIForm}>Дані в кабінет магазину</span>
                <input type="text" required placeholder="Введіть логін" className={style.input}/>
                <input type="text" required placeholder="Введіть пароль" className={style.input}/>
            </form>
            <div className={style.blockForPages}>
                <span className={style.titleIForm}>Сторінки</span>
                <span className={style.contentInBlock}>Сторінка фільтрації</span>
                <span className={style.contentInBlock}>Сторінка зворотнього зв’язку</span>
            </div>
            <div className={style.blockForBtn}>
                <button className={style.btnSave}>Зберегти</button>
            </div>
        </div>
    )
}

export default MarketplaceForm;
