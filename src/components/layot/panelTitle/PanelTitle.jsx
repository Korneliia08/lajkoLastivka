import s from "./PanelTitle.module.scss";
import MainBtn from "@/components/ui/mainBtn/MainBtn.jsx";
import cn from "@/functions/cn.js";

const PanelTitle = ({
  title,
  subTitle,
  buttonText,
  buttonIcon,
  onClick,
  disabled,
  inner = false,
  ...props
}) => {
  return (
    <div className={cn(s.panelTitleContainer, inner ? s.inner : "")}>
      <div className={s.blockForTitle}>
        <h3 className={s.title}>{title}</h3>
        <h4 className={s.subTitle}>{subTitle}</h4>
      </div>
      {buttonText && (
        <MainBtn
          disabled={disabled}
          buttonText={buttonText}
          buttonIcon={buttonIcon}
          onClick={onClick}
        />
      )}
    </div>
  );
};
export default PanelTitle;
