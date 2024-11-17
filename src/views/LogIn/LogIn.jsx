import style from "./LogIn.module.scss";
import lastivkaWithHeart from "./../../assets/images/lastivkaWithHeart.png";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function LogIn() {
    const navigate = useNavigate();

    const [correctData, setCorrectData] = useState(true);

    const [login, setLogin] = useState('');
    const loginRef = useRef(null)
    const passRef = useRef(null)
    const [password, setPass] = useState('');
    const [result, setResult] = useState(' ');

    async function checkLoginAndPass() {
        setResult('')
        if (login.length <= 0 || password.length <= 0) {
            setResult("<b style='color: white'>Логін і пароль — ключі до всього. Де вони? 🤔</b>");
            return;
        }

        try {
            const data = {
                email: login,
                password
            }
            const response = await axios.post(import.meta.env.VITE_APP_API + "/authorization/login", data);
            setCorrectData(true);
            navigate("admin");
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('refresh_token', response.data.refresh_token);

        } catch (error) {

            setCorrectData(false);
            setResult("<b  style='color: white'>Дані невірні, ластівка не може злетіти 🤔</b>")
        }

        loginRef.current.value = '';
        passRef.current.value = '';
    }

    return (
        <div className={style.container}>
            <div className={style.blockForImageAndTitle}>
                <img src={lastivkaWithHeart} alt="lastivkaWithHeart" className={style.imageLastivka}/>
                <h1 className={style.title}><span className={style.firstWord}>"ЛайкоЛастівка"</span> <br/> Летимо до
                    позитиву разом!</h1>
            </div>
            <div className={style.wrapper}>
                <div className={style.containerForForm}>
                    <h2 className={style.titleForm}>Вхід</h2>
                    <form className={style.formLogIn} onClick={(event) => {
                        event.preventDefault()
                    }}>
                        <input
                            ref={loginRef}
                            type="text" className={style.inputLogIn} placeholder="Логін"
                            onChange={(ev) => setLogin(ev.target.value)}/>
                        <input
                            ref={passRef}
                            type="password" className={style.inputLogIn} placeholder="Пароль"
                            onChange={(ev) => setPass(ev.target.value)}/>
                        <div className={style.smallContainer}>
                            <span className={style.spanForeign}>Забули пароль</span>
                            <div className={style.containerForCheckInput}>
                                <span className={style.remember}>Запам’ятай мене</span>
                                <input type="checkbox" className={style.inputCheck}/>
                            </div>
                        </div>
                        <button className={style.btnLogIn} onClick={checkLoginAndPass}>Увійти</button>
                        <span dangerouslySetInnerHTML={{__html: result}}></span>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default LogIn;
