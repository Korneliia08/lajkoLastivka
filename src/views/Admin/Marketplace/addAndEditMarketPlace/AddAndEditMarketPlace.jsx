import s from "./AddAndEditMarketPlace.module.scss";
import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import OutletPanelScroll from "@/components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import DetailsOfShop from "@/views/Admin/Marketplace/addAndEditMarketPlace/detailsOfShop/DetailsOfShop.jsx";
import DataAccountToShops
    from "@/views/Admin/Marketplace/addAndEditMarketPlace/dataAccountToShops/DataAccountToShops.jsx";
import TemplateOfMessages
    from "@/views/Admin/Marketplace/addAndEditMarketPlace/templateOfMessages/TemplateOfMessages.jsx";


const AddAndEditMarketPlace = ({...props}) => {
    return (
        <>
            <PanelTitle title={'Підключення магазину:'}
                        subTitle={'Підключіть свій магазин, щоб автоматично надсилати клієнтам запити на оцінку замовлення та аналізувати результати.'}
                        isBtn={false}/>
            <OutletPanelScroll>
                <div className={s.addAndEditMarketPlaceContainer}>
                    <DataAccountToShops/>
                    <DetailsOfShop/>
                    <TemplateOfMessages/>
                </div>
            </OutletPanelScroll>
        </>
    )
}
export default AddAndEditMarketPlace;
