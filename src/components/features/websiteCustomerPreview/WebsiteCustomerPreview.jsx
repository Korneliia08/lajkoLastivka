import s from "./WebsiteCustomerPreview.module.scss";
import phone from "@/assets/images/phoneEmpty.png";

const WebsiteCustomerPreview = ({ text = "", ...props }) => {
  return (
    <div className={s.websiteCustomerPreviewContainer}>
      <img className={s.phone} src={phone} />
      <img className={s.phone2} src={phone} />
      <div className={s.content}></div>
    </div>
  );
};
export default WebsiteCustomerPreview;
