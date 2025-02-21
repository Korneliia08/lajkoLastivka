import s from "./WebsiteCustomerPreview.module.scss";
import phone from "@/assets/images/phoneEmpty.png";
import { useEffect, useState } from "react";

const WebsiteCustomerPreview = ({
  storeId,
  banner,
  logo,
  text = "",
  refreshCount,
  ...props
}) => {
  const [visible, setVisible] = useState(true);
  const data = {
    order: {
      store: {
        logoImg: logo,
        bannerImg: banner,
      },
    },
  };
  useEffect(() => {
    console.log(refreshCount);
    refreshFun();
  }, [refreshCount]);
  function refreshFun() {
    setVisible(false);

    setTimeout(() => {
      setVisible(true);
    }, 10);
  }

  return (
    <div className={s.websiteCustomerPreviewContainer}>
      <img className={s.phone} src={phone} />
      <img className={s.phone2} src={phone} />
      <div className={s.content}>
        {visible && <iframe src={"/#/review/prevTest_" + storeId} />}
        {/*  <PageFilterBanner data={data} />*/}
        {/*  <div className={s.container}>*/}
        {/*    <PageFilterChooseStars prev={true} />*/}
        {/*  </div>*/}
      </div>
    </div>
  );
};
export default WebsiteCustomerPreview;
