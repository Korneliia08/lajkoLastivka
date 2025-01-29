import style from "./LogIn.module.scss";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LogIn() {
  const navigate = useNavigate();

  const [correctData, setCorrectData] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [login, setLogin] = useState("");
  const loginRef = useRef(null);
  const passRef = useRef(null);
  const [password, setPass] = useState("");
  const [result, setResult] = useState(" ");

  async function checkLoginAndPass() {
    setResult("");

    if (login.length <= 0 || password.length <= 0) {
      setResult(
        "<b style='color: white'>Логін і пароль — ключі до всього. Де вони? 🤔</b>",
      );
      return;
    }

    try {
      const data = {
        email: login,
        password,
      };
      setDisabled(true);
      const response = await axios.post(
        import.meta.env.VITE_APP_API + "/authorization/login",
        data,
      );
      setCorrectData(true);
      navigate("admin");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
    } catch (error) {
      setCorrectData(false);
      setResult(
        "<b  style='color: white'>Дані невірні, ластівка не може злетіти 🤔</b>",
      );
    }
    setDisabled(false);
    loginRef.current.value = "";
    passRef.current.value = "";
  }

  return (
    <div className={style.container}>
      <div className={style.left}></div>
      <div className={style.right}>
        <h5 className={style.title}>Вхід до адміністративної панелі</h5>
        <p className={style.description}>
          Адміністративна панель надає можливість зручно налаштовувати розсилку
          повідомлень та здійснювати аналіз отриманих відгуків, що допомагає
          ефективно керувати процесами на вашому сайті.
        </p>
        <form
          className={style.formLogIn}
          onClick={(event) => event.preventDefault()}
        >
          <input
            ref={loginRef}
            type="text"
            className={style.inputLogIn}
            placeholder="Логін"
            onChange={(ev) => setLogin(ev.target.value)}
          />
          <input
            ref={passRef}
            type="password"
            className={style.inputLogIn}
            placeholder="Пароль"
            onChange={(ev) => setPass(ev.target.value)}
          />
          <button
            disabled={disabled}
            className={style.btnLogIn}
            onClick={checkLoginAndPass}
          >
            Увійти
          </button>
          <span dangerouslySetInnerHTML={{ __html: result }}></span>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
