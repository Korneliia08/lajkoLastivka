import PanelTitle from "@/components/layot/panelTitle/PanelTitle.jsx";
import s from "@/views/Admin/opinions/Opinions.module.scss";
import OutletPanelScroll from "@/components/ui/outletPanelScroll/OutletPanelScroll.jsx";
import CardOfUser from "@/views/Admin/opinions/cardOfUser/CardOfUser.jsx";
import useFetch from "@hooks/useFetch.js";

const Opinions = ({ ...props }) => {
  const { data } = useFetch("/opinions-page");
  return (
    <>
      <OutletPanelScroll>
        <PanelTitle
          inner={true}
          title={"Відгуки:"}
          subTitle={
            "Перегляд користувачів, які залишили відгук, та відображення їхніх відгуків у нашій внутрішній системі та на розетці."
          }
        />
        <div className={s.opinionsContainer}>
          {data.map((obj) => {
            return <CardOfUser data={obj} />;
          })}
        </div>
      </OutletPanelScroll>
    </>
  );
};
export default Opinions;
