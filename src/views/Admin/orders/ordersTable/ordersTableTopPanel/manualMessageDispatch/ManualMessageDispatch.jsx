import s from "./ManualMessageDispatch.module.scss";
import ManualDispatchContent from "./manualDispatchContent/ManualDispatchContent.jsx";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../../../providers/interceptors/refreshToken.interceptor.js";
import {useState} from "react";
import {refreshOrdersList, removeAllSelectedOrder} from "../../../ordersSlice.js";
import toast from "react-hot-toast";
import {confirmAlert} from "react-confirm-alert";


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
                    loading: 'Підготовка повідомлень до надсилання',
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
        confirmAlert({
            title: 'Ви впевнені, що хочете надіслати повідомлення?',
            message: 'Сума повідомлень для надсилання:' + selectedOrders.length,
            buttons: [
                {
                    label: 'Так',
                    onClick: async () => {
                        await sendData()
                    }
                },
                {
                    label: 'Ні',
                    onClick: () => {
                    }
                }
            ]
        });


    }

    return (
        <div className={s.manualMessageDispatchContainer}>
            <div className={s.information}>
                <span className={s.label}>
Вибрані замовлення:
                </span>
                <span className={s.value}>
{selectedOrders.length}
                </span>
            </div>

            <div className={s.content}>
                <ManualDispatchContent setData={setData} data={data}/>
            </div>
            <div className={s.controls}>
                <button disabled={isBlocked} className={'btn blue'} onClick={() => controller.closeModal()}>Скасувати
                </button>
                <button disabled={isBlocked} className={'btn green'} onClick={() => dispatchMessage()}>Надіслати
                </button>
            </div>

        </div>
    )
}
export default ManualMessageDispatch;
