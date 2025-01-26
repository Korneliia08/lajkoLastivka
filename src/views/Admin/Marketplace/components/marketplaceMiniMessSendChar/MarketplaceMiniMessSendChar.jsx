import s from "./MarketplaceMiniMessSendChar.module.scss";
import {useEffect, useState} from "react";
import api from "../../../../../providers/interceptors/refreshToken.interceptor.js";
import {CartesianGrid, Line, LineChart, YAxis} from "recharts";
import ms from 'ms'

const MarketplaceMiniMessSendChar = ({storeId}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
        const int = setInterval(() => {
            fetchData()
        }, ms('1min'))
        return () => {
            clearInterval(int)
        }
    }, []);

    function fetchData() {
        api.get(`messages/sendMessagesStatistic/${storeId}`).then(res => {
            setData(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const max = Math.ceil(
        data.reduce((max, obj) => {
            const rounded = Math.ceil(obj.messageCount / 10) * 10; // Zaokrąglenie w górę do najbliższej 10
            return rounded > max ? rounded : max; // Zwraca większą wartość
        }, 0)
    );
    //if (!data) return ''
    return (
        <div className={s.marketplaceMiniMessSendCharContainer}>
            {/*<ResponsiveContainer width="100%" height="100%">*/}
            <LineChart className={s.char} width={200} height={40} data={data}>
                <CartesianGrid strokeDasharray="9 9" stroke={'#00000009'}/>
                <YAxis domain={[0, max]} stroke={'#00000099'}/>
                <Line type="monotone" dataKey="messageCount" r={0} stroke="#8500d391" strokeWidth={2}/>
            </LineChart>
            {/*</ResponsiveContainer>*/}
        </div>
    )
}
export default MarketplaceMiniMessSendChar;
