import style from "./MarketplaceForm.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import {CiShop} from "react-icons/ci";
import {FaRegEdit} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";
import api from "../../../../providers/interceptors/refreshToken.interceptor.js";
import InputFile from "../../../../components/ui/InputFile/InputFile.jsx";


function MarketplaceForm() {
    const {id} = useParams();
    const navigate = useNavigate()
    const nameRef = useRef(null)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const [loginError, setLoginError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            if (id !== "0") {
                try {
                    const res = await api(`stores/${id}`);
                    const store = res.data;
                    nameRef.current.value = store.name;
                } catch (err) {
                    console.log(err);
                }
            }
        };

        fetchData();
    }, [id]);

    async function deleteMarketplace() {
        try {
            await api.delete(`stores/${id}`);

            navigate('/admin/marketplaces')
        } catch (err) {
            console.log(err);
        }
    }


    async function submit($event) {
        $event.preventDefault()
        setLoginError(false)
        const body = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        try {

            if (id === "0") {
                const res = await api.post('/stores', body)
                if (res.data.status && res.data.status == -1) {
                    console.log("Login error")
                    setLoginError(true)

                } else {

                    navigate('/admin/marketplaces')
                }
            } else {
                const res = await api.patch(`/stores/${id}`, body)
                if (res.data.status && res.data.status == -1) {
                    console.log("Login error")
                    setLoginError(true)

                } else {
                    navigate('/admin/marketplaces')
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={style.container}>
            <form onSubmit={submit}>
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

                <div className={style.formAddAndEdit}>
                    <label htmlFor="store-name" className={style.titleIForm}>Назва магазину</label>
                    <input ref={nameRef} type="text" name="store-name" required placeholder="Введіть назву магазину"
                           className={style.input}/>
                    <span className={style.titleIForm}>Дані в кабінет магазину</span>
                    <input ref={usernameRef} type="text" required={id === '0'} placeholder="Введіть логін" className={style.input}/>
                    <input type={"password"} ref={passwordRef} required={id === '0'} placeholder="Введіть пароль" className={style.input}/>
                    {loginError && "Shop login error"}

                    <InputFile label={"Podaj zdjęcie"}/>
                </div>
                <div className={style.blockForPages}>
                    <span className={style.titleIForm}>Сторінки</span>
                    <span className={style.contentInBlock}>Сторінка фільтрації</span>
                    <span className={style.contentInBlock}>Сторінка зворотнього зв’язку</span>
                </div>
                <div className={style.blockForBtn}>
                    <button type={"submit"} className={style.btnSave}>Зберегти</button>
                    {id !== "0" &&
                        <button type={"button"} onClick={deleteMarketplace} className={style.btnSave}>Delete</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default MarketplaceForm;
