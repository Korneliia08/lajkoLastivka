import s from "./PanelTitle.module.scss";
import MainBtn from "@/components/ui/mainBtn/MainBtn.jsx";

const PanelTitle = ({
  title,
  subTitle,
  buttonText,
  buttonIcon,
  onClick,
  ...props
}) => {
  return (
    <div className={s.panelTitleContainer}>
      <div className={s.blockForTitle}>
        <h3 className={s.title}>{title}</h3>
        <h4 className={s.subTitle}>{subTitle}</h4>
      </div>
      {buttonText && (
        <MainBtn
          buttonText={buttonText}
          buttonIcon={buttonIcon}
          onClick={onClick}
        />
      )}
    </div>
  );
};
export default PanelTitle;
