import s from "./DataOfUser.module.scss";
import {MdOutlineLocalPhone} from "react-icons/md";


const DataOfUser = ({numberOfPhone, user, ...props}) => {
    numberOfPhone = "+380683273238";
    user = "Майстренко Євген Іванович"
    return (
        <div className={s.dataOfUserContainer}>
            <span className={s.user}>{user}</span>
            <div className={s.numberOfPhone}>
                <MdOutlineLocalPhone className={s.phoneIcon}/>
                <span className={s.number}>{numberOfPhone}</span>
            </div>
        </div>
    )
}
export default DataOfUser;
