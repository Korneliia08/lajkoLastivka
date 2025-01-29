import style from "./MarketplaceForm.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import api from "../../../../providers/interceptors/refreshToken.interceptor.js";
import InputFile from "../../../../components/ui/InputFile/InputFile.jsx";
import BannerPreview from "../components/bannerPreview/BannerPreview.jsx";
import MessageTemplate from "./components/messageTemplate/MessageTemplate.jsx";
import PageFilterChooseStarsPreview from "./modals/pageFilterChooseStarsPreview/PageFilterChooseStarsPreview.jsx";

function MarketplaceForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const sendStartRef = useRef(null);
  const sendEndRef = useRef(null);
  const sendingDelayRef = useRef(null);
  const usernameRef = useRef(null);
  const marketplaceLinkRef = useRef(null);
  const descriptionRef = useRef(null);

  const passwordRef = useRef(null);
  const [loginError, setLoginError] = useState(false);
  const [bannerImg, setBannerImg] = useState(undefined);
  const [logoImg, setLogoImg] = useState(undefined);
  const [marketPlaceLogo, setMarketPlaceLogo] = useState(undefined);
  const [saving, setSaving] = useState(false);
  const textRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    const fetchData = async () => {
      setLoading(true); // Rozpoczęcie ładowania
      if (id !== "0") {
        try {
          const res = await api(`stores/${id}`);
          const store = res.data;
          nameRef.current.value = store.name;
          textRef.current.value = store.messageTemplateViber;
          sendStartRef.current.value = store.sendingStartTime;
          sendEndRef.current.value = store.sendingEndTime;
          sendingDelayRef.current.value = store.sendingDelay;
          marketplaceLinkRef.current.value = store.link;
          descriptionRef.current.value = store.description;
          setMarketPlaceLogo(store.logo);
          setBannerImg(store.bannerImg);
          setLogoImg(store.logoImg);
        } catch (err) {
          navigate("/admin/marketplaces");
          console.log(err);
        }
      }
      if (id == 0) {
        textRef.current.value =
          "Привіт! 🙌\n" +
          'Твоє замовлення з [store] вже у тебе! Сподіваємось, що [product] став тим самим "вау"-моментом, якого ти чекав! 😍\n' +
          "\n" +
          "\n" +
          "Якщо так, не забудь оцінити нас! Твоя думка для нас важлива, а твоя оцінка — це як додатковий бонус для нас! 🌟\n" +
          "\n" +
          "\n" +
          "Залишити відгук можна тут: [link]\n" +
          "\n" +
          "\n" +
          "Дякуємо, що вибрав нас! Сподіваємось, це не останній раз! 😉";
      }
      setLoading(false); // Zakończenie ładowani
    };

    fetchData();
  }, [id]);

  async function submit($event) {
    $event.preventDefault();
    setLoginError(false);
    setSaving(true);
    const body = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      link: marketplaceLinkRef.current.value,
      logo: marketPlaceLogo,
      sendingEndTime: sendEndRef.current.value,
      description: descriptionRef.current.value,
      sendingStartTime: sendStartRef.current.value,
      sendingDelay: sendStartRef.current.value,
      bannerImg: bannerImg,
      logoImg: logoImg,
      messageTemplateViber: textRef.current.value,
    };
    try {
      if (id === "0") {
        const res = await api.post("/stores", body);
        if (res.data.status && res.data.status == -1) {
          console.log("Login error");
          setLoginError(true);
        } else {
          navigate("/admin/marketplaces");
        }
      } else {
        const res = await api.patch(`/stores/${id}`, body);
        if (res.data.status && res.data.status == -1) {
          console.log("Login error");
          setLoginError(true);
        } else {
          navigate("/admin/marketplaces");
        }
      }
    } catch (error) {
      console.log(error);
    }
    setSaving(false);
  }

  return (
    <div className={style.container}>
      <div className={style.left}>
        <form onSubmit={submit}>
          <div className={style.titleOfSubPageBlock}>
            {id === "0" && (
              <>
                <h3 className={style.title}>Додати магазин</h3>
                <CiShop className={style.iconOfShopAndEdit} />
              </>
            )}
            {id !== "0" && (
              <>
                <h3 className={style.title}>Редагувати магазин</h3>
                <FaRegEdit className={style.iconOfShopAndEdit} />
              </>
            )}
          </div>
          <div className={style.formAddAndEdit}>
            <label htmlFor="store-name" className={style.titleIForm}>
              Назва магазину
            </label>
            <input
              disabled={loading}
              ref={nameRef}
              type="text"
              name="store-name"
              required
              placeholder="Введіть назву магазину"
              className={style.input}
            />
            <input
              disabled={loading}
              ref={descriptionRef}
              type="text"
              name="store-description"
              required
              placeholder="marketplace description"
              className={style.input}
            />

            <span className={style.titleIForm}>Дані в кабінет магазину</span>
            <input
              disabled={loading}
              ref={usernameRef}
              type="text"
              required={id === "0"}
              placeholder="Введіть логін"
              className={style.input}
            />
            <input
              disabled={loading}
              type={"password"}
              ref={passwordRef}
              required={id === "0"}
              placeholder="Введіть пароль"
              className={style.input}
            />
            {loginError && "Shop login error"}
            <span className={style.titleIForm}>Хедер</span>
            <InputFile
              disabled={loading}
              label={"Оберіть тло для хедера"}
              initialImage={bannerImg}
              onChange={(event) => setBannerImg(event.base64)}
            />
            <br />
            <InputFile
              disabled={loading}
              label={"Оберіть лого"}
              initialImage={logoImg}
              onChange={(event) => setLogoImg(event.base64)}
            />
            <span className={style.titleIForm}>Перегляд хедера</span>
            <BannerPreview data={{ bannerImg, logoImg }} />
            <br />
            <span className={style.titleIForm}>Czas wysyłki</span>
            <input
              disabled={loading}
              ref={sendStartRef}
              type="text"
              required={true}
              placeholder="Od"
              className={style.input}
            />
            <input
              disabled={loading}
              ref={sendEndRef}
              type="text"
              required={true}
              placeholder="Do"
              className={style.input}
            />
            <input
              disabled={loading}
              ref={sendingDelayRef}
              type="text"
              required={true}
              placeholder="Opóźnienie"
              className={style.input}
            />
          </div>

          <div className={style.blockForPages}>
            <span className={style.titleIForm}>Сторінки</span>
            <PageFilterChooseStarsPreview
              bannerImg={bannerImg}
              logoImg={logoImg}
            />

            <span className={style.contentInBlock}>
              Сторінка зворотнього зв’язку
            </span>
          </div>

          <div className={style.blockForPages}>
            <span className={style.titleIForm}>Marketplace</span>
            <InputFile
              disabled={loading}
              label={"MarketPlace logo"}
              initialImage={marketPlaceLogo}
              onChange={(event) => setMarketPlaceLogo(event.base64)}
            />
            <input
              disabled={loading}
              ref={marketplaceLinkRef}
              type="text"
              required={true}
              placeholder="Link"
              className={style.input}
            />
            marketplaceLink
          </div>

          <div className={style.blockForPages}>
            <span className={style.titleIForm}>Czas wysyłki</span>

            <span className={style.contentInBlock}>
              Сторінка зворотнього зв’язку
            </span>
          </div>

          <div className={style.blockForBtn}>
            <button
              type={"submit"}
              disabled={saving || loading}
              className={style.btnSave}
            >
              Зберегти
            </button>
          </div>
        </form>
      </div>
      <div className={style.right}>
        <MessageTemplate disabled={loading} textRef={textRef} />
      </div>
    </div>
  );
}

export default MarketplaceForm;
