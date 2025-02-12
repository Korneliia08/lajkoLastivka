import s from "./AddAndEditMarketPlace.module.scss";
import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "@/components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import DetailsOfShop from "@/views/Admin/Marketplace/addAndEditMarketPlace/detailsOfShop/DetailsOfShop.jsx";
import DataAccountToShops from "@/views/Admin/Marketplace/addAndEditMarketPlace/dataAccountToShops/DataAccountToShops.jsx";
import TemplateOfMessages from "@/views/Admin/Marketplace/addAndEditMarketPlace/templateOfMessages/TemplateOfMessages.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "@/providers/interceptors/refreshToken.interceptor.js";
import { useDispatch, useSelector } from "react-redux";
import {
  marketplaceResetForm,
  marketplaceSetField,
} from "@/views/Admin/Marketplace/addAndEditMarketPlace/marketplaceFormSlice.js";
import MainBtn from "@/components/ui/mainBtn/MainBtn.jsx";
import { toast } from "react-hot-toast";

const AddAndEditMarketPlace = ({ ...props }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [store, setStore] = useState(null);
  useEffect(() => {
    dispatch(marketplaceResetForm());
    const fetchData = async () => {
      //  setLoading(true); // Rozpoczęcie ładowania
      if (id !== "0") {
        try {
          const res = await api(`stores/${id}`);
          const store = res.data;
          setStore(store);
          dispatch(marketplaceSetField({ field: "name", value: store.name }));
          dispatch(
            marketplaceSetField({ field: "isConnect", value: store.isConnect }),
          );
          dispatch(
            marketplaceSetField({
              field: "description",
              value: store.description,
            }),
          );
          dispatch(
            marketplaceSetField({
              field: "messageTemplateViber",
              value: store.messageTemplateViber,
            }),
          );
          dispatch(
            marketplaceSetField({
              field: "sendingStartTime",
              value: store.sendingStartTime,
            }),
          );
          dispatch(
            marketplaceSetField({
              field: "isAutoSendEnable",
              value: store.isAutoSendEnable,
            }),
          );
          dispatch(
            marketplaceSetField({
              field: "sendingEndTime",
              value: store.sendingEndTime,
            }),
          );
          dispatch(
            marketplaceSetField({
              field: "sendingDelay",
              value: store.sendingDelay,
            }),
          );
          dispatch(marketplaceSetField({ field: "link", value: store.link }));
          dispatch(marketplaceSetField({ field: "logo", value: store.logo }));
          dispatch(
            marketplaceSetField({
              field: "viberBannerImg",
              value: store.bannerImg,
            }),
          );
          dispatch(
            marketplaceSetField({
              field: "viberLogoImg",
              value: store.logoImg,
            }),
          );
        } catch (err) {
          navigate("/admin/marketplaces");
          console.log(err);
        }
      }
      if (id == 0) {
        // textRef.current.value = 'Привіт! 🙌\n' +
        //     'Твоє замовлення з [store] вже у тебе! Сподіваємось, що [product] став тим самим "вау"-моментом, якого ти чекав! 😍\n' +
        //     '\n' +
        //     '\n' +
        //     'Якщо так, не забудь оцінити нас! Твоя думка для нас важлива, а твоя оцінка — це як додатковий бонус для нас! 🌟\n' +
        //     '\n' +
        //     '\n' +
        //     'Залишити відгук можна тут: [link]\n' +
        //     '\n' +
        //     '\n' +
        //     'Дякуємо, що вибрав нас! Сподіваємось, це не останній раз! 😉'
      }
      //    setLoading(false); // Zakończenie ładowani
    };

    fetchData();
  }, [id]);
  const state = useSelector((state) => state.marketplaceForm);

  async function saveData() {
    const body = {
      name: state.name,
      username: state.rozetkaLogin,
      password: state.rozetkaPassword,
      isConnect: state.isConnect,
      link: state.link,
      logo: state.logo,
      sendingEndTime: state.sendingEndTime,
      description: state.description,
      sendingStartTime: state.sendingStartTime,
      isAutoSendEnable: state.isAutoSendEnable,
      sendingDelay: state.sendingDelay,
      bannerImg: state.viberBannerImg,
      logoImg: state.viberLogoImg,
      messageTemplateViber: state.messageTemplateViber,
    };
    setLoading(true);
    try {
      if (id == 0) {
        const res = await api.post("/stores", body);

        toast.success("Ваш магазин збережено!");
        navigate("/admin/marketplaces");
      } else {
        const res = await api.patch(`/stores/${id}`, body);

        toast.success("Зміни збережено!");
        navigate(`/admin/marketplaces/${id}`);
      }
    } catch (err) {}
    setLoading(false);
  }

  if (id === 0 && !store) return "";
  return (
    <>
      <OutletPanelScroll>
        {id == 0 && (
          <PanelTitle
            inner={true}
            title={"Підключення магазину:"}
            subTitle={
              "Підключіть свій магазин, щоб автоматично надсилати клієнтам запити на оцінку замовлення та аналізувати результати."
            }
          />
        )}
        {id != 0 && (
          <PanelTitle
            inner={true}
            title={"Редагування магазину:"}
            subTitle={
              "Внесіть зміни до налаштувань Вашого магазину,якщо потрібно"
            }
          />
        )}
        <div className={s.addAndEditMarketPlaceContainer}>
          <DataAccountToShops store={store} />
          <div className={s.containerForForm}>
            <DetailsOfShop />
            <TemplateOfMessages />
            <MainBtn
              onClick={saveData}
              disabled={isLoading}
              buttonText={"Зберегти"}
              widthBtn={"180px"}
            />
          </div>
        </div>
      </OutletPanelScroll>
    </>
  );
};
export default AddAndEditMarketPlace;
