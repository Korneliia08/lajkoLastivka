import s from "./WebsiteCustomerPreview.module.scss";
import phone from "@/assets/images/phoneEmpty.png";

const WebsiteCustomerPreview = ({
  storeId,
  banner,
  logo,
  text = "",
  ...props
}) => {
  const data = {
    order: {
      store: {
        logoImg: logo,
        bannerImg: banner,
      },
    },
  };
  console.log(data);
  return (
    <div className={s.websiteCustomerPreviewContainer}>
      <img className={s.phone} src={phone} />
      <img className={s.phone2} src={phone} />
      <div className={s.content}>
        <iframe src={"/#/review/prevTest_" + storeId} />
        {/*  <PageFilterBanner data={data} />*/}
        {/*  <div className={s.container}>*/}
        {/*    <PageFilterChooseStars prev={true} />*/}
        {/*  </div>*/}
      </div>
    </div>
  );
};
export default WebsiteCustomerPreview;
