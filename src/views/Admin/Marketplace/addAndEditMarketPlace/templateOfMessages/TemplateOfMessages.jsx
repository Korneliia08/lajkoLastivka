import s from "./TemplateOfMessages.module.scss";
import SubtitleInForm from "@/views/Admin/Marketplace/addAndEditMarketPlace/subtitleInForm/SubtitleInForm.jsx";
import LoadImageFromComputer from "@/components/ui/loadImageFromComputer/LoadImageFromComputer.jsx";
import SecondPart from "@/views/Admin/Marketplace/addAndEditMarketPlace/templateOfMessages/secondPart/SecondPart.jsx";


const TemplateOfMessages = ({...props}) => {
    return (
        <div className={s.templateOfMessagesContainer}>
            <SubtitleInForm title={"Шаблони повідомлень"}
                            describe={"Налаштуйте шаблони для автоматичних повідомлень клієнтам із проханням оцінити замовлення."}/>
            <form className={s.containerForTemplateOfMessage}>
                <LoadImageFromComputer title={"Лого"} describe={"Лого буде відображено на хедері"}/>
                <LoadImageFromComputer title={"Тло для хедера"} describe={"Тло використовуватиметься у хедері"}/>
            </form>
            <SecondPart/>
        </div>
    )
}
export default TemplateOfMessages;
