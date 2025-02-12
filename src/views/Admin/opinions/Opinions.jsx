import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import s from "@/views/Admin/opinions/Opinions.module.scss";
import OutletPanelScroll from "@/components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import CardOfUser from "@/views/Admin/opinions/cardOfUser/CardOfUser.jsx";


const Opinions = ({...props}) => {
    return (
        <>
            <OutletPanelScroll>
                <PanelTitle
                    inner={true}
                    title={"Відгуки:"}
                    subTitle={"Перегляд користувачів, які залишили відгук, та відображення їхніх відгуків у нашій внутрішній системі."}
                />
                <div className={s.opinionsContainer}>
                    <CardOfUser/>
                    <CardOfUser/>
                    <CardOfUser/>
                    <CardOfUser/>
                </div>
            </OutletPanelScroll>
        </>
    )
}
export default Opinions;
