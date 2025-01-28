import s from "./DetailsOfShop.module.scss";
import SubtitleInForm from "@/views/Admin/Marketplace/addAndEditMarketPlace/subtitleInForm/SubtitleInForm.jsx";
import RowOfFormAddAndEditShop from "@/components/ui/rowOfFormAddAndEditShop/RowOfFormAddAndEditShop.jsx";
import LoadImageFromComputer from "@/components/ui/loadImageFromComputer/LoadImageFromComputer.jsx";


const DetailsOfShop = ({...props}) => {
    return (
        <div className={s.detailsOfShopContainer}>
            <SubtitleInForm title={"Основні інформації"} describe={"Введіть ключові дані про свій магазин"}/>
            <form>
                <RowOfFormAddAndEditShop title={"Назва"} describe={""} placeholder={"Введіть назву магазину"}
                                         type={"text"}/>
                <RowOfFormAddAndEditShop title={"Опис"} describe={""}/>
                <RowOfFormAddAndEditShop title={"Логін"} describe={"Введіть логін до кабінету магазину"}/>
                <RowOfFormAddAndEditShop title={"Пароль"} describe={"Введіть пароль до кабінету магазину"}/>
                <LoadImageFromComputer title={"Лого"} describe={"Лого використовуватиметься у цій адмінці"}/>
            </form>
        </div>
    )
}
export default DetailsOfShop;
