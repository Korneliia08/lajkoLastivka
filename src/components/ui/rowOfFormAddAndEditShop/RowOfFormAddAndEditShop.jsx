import s from "./RowOfFormAddAndEditShop.module.scss";

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
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          disabled={loading}
          required
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
export default RowOfFormAddAndEditShop;
