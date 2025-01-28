import s from "./RowOfFormAddAndEditShop.module.scss";


const RowOfFormAddAndEditShop = ({title, describe, placeholder, type, ...props}) => {
//    const textRef = useRef(null);
    // const nameRef = useRef(null);
    // const [loading, setLoading] = useState(false);
    // setLoading(false);
    return (
        <div className={s.row}>
            <div className={s.left}>
                <span className={s.title}>{title}</span>
                <span className={s.describe}>{describe}</span>
            </div>
            <div className={s.right}>
                <input type={type} required placeholder={placeholder}/>
                {/*//disabled={loading} ref={nameRef}*/}
            </div>
        </div>
    )
}
export default RowOfFormAddAndEditShop;
