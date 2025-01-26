import s from "./ManualMessageDispatch.module.scss";
import ManualDispatchContent from "./manualDispatchContent/ManualDispatchContent.jsx";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../../../providers/interceptors/refreshToken.interceptor.js";
import {useState} from "react";
import {refreshOrdersList, removeAllSelectedOrder} from "../../../ordersSlice.js";
import toast from "react-hot-toast";


const ManualMessageDispatch = ({controller, ...props}) => {
    const [data, setData] = useState({message: '', bannerImg: '', logoImg: ''})
    const [isBlocked, setBlocked] = useState(false)

    const selectedOrders = useSelector(state => state.orders.selectedOrders);
    const dispatch = useDispatch()

    async function sendData() {
        try {
            const obj = {
                ordersId: selectedOrders.map(order => order.id),
                message: data.message,
                imageData: data.imageData,
                imageLogoData: data.imageLogoData
            }
            setBlocked(true)
            console.log(1);
            await toast.promise(
                api.post('/messages/sendManual', obj),
                {
                    loading: 'Saving...',
                    success: <b>Settings saved!</b>,
                    error: <b>Could not save.</b>,
                }
            );
            setBlocked(false)

            dispatch(removeAllSelectedOrder())
            dispatch(refreshOrdersList())
            setTimeout(() => {
                dispatch(refreshOrdersList())
            }, 5000)
            setTimeout(() => {
                dispatch(refreshOrdersList())
            }, 12000)
            controller.closeModal()
        } catch (err) {
            dispatch(refreshOrdersList())
            console.log(err);
        }

    }


    async function dispatchMessage() {

        await sendData()

    }

    return (
        <div className={s.manualMessageDispatchContainer}>
            <div className={s.information}>
                <span className={s.label}>
Selected orders:
                </span>
                <span className={s.value}>
{selectedOrders.length}
                </span>
            </div>

            <div className={s.content}>
                <ManualDispatchContent setData={setData} data={data}/>
            </div>
            <div className={s.controls}>
                <button disabled={isBlocked} className={'btn blue'} onClick={() => controller.closeModal()}>Anuluj</button>
                <button disabled={isBlocked} className={'btn green'} onClick={() => dispatchMessage()}>Wyślij</button>
            </div>

        </div>
    )
}
export default ManualMessageDispatch;
