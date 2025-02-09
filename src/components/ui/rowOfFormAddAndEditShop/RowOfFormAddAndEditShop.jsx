import s from "./RowOfFormAddAndEditShop.module.scss";
import Toggle from "react-toggle";

const RowOfFormAddAndEditShop = ({
  loading,
  value,
  onChange,
  title,
  name,
  describe,
  placeholder,
  type,
  ...props
}) => {
  return (
    <div className={s.row}>
      <div className={s.left}>
        <span className={s.title}>{title}</span>
        <span className={s.describe}>{describe}</span>
      </div>
      <div className={s.right}>
        {type === "toggle" && (
          <Toggle
            onChange={(k) =>
              onChange({
                target: {
                  value: k.nativeEvent.target.checked,
                  name: name,
                },
              })
            }
            name:name
            checked={value}
            disabled={loading}
          />
        )}
        {type !== "toggle" && (
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            disabled={loading}
            required
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};
export default RowOfFormAddAndEditShop;
