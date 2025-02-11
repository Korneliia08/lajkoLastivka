import s from "./ViberMessagePreview.module.scss";
import phone from "../../../assets/images/phone.png";
import profil from "../../../../public/logo.png";
import product from "../../../assets/images/logoHome.jpg";

const ViberMessagePreview = ({ text = "", ...props }) => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const newText = text
    .replaceAll("[product]", "Міні принтер дитячий портативний")
    .replaceAll("\n", "<br />");

  return (
    <div className={s.viberMessagePreviewContainer}>
      <img className={s.phone} src={phone} />
      <div className={s.message}>
        <img src={profil} className={s.circleImage} />
        <div className={s.textBlock}>
          <span dangerouslySetInnerHTML={{ __html: newText }}></span>
          <span className={s.time}>{getCurrentTime()}</span>
          <img src={product} className={s.productImage} />
          <div className={s.buttonContainer}>
            <button className={s.actionBtn}>AKCJA</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViberMessagePreview;
