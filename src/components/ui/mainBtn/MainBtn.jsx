import s from "./MainBtn.module.scss";

const MainBtn = ({
  buttonText,
  disabled,
  buttonIcon,
  onClick,
  widthBtn,
  ...props
}) => {
  return (
    <button
      style={{ width: widthBtn }}
      disabled={disabled}
      className={s.btnStyle}
      onClick={onClick}
    >
      {buttonIcon}
      {buttonText}
    </button>
  );
};
export default MainBtn;
