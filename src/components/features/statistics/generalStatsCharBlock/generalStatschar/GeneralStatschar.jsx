import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";


const GeneralStatschar = ({data}) => {
    const [h, setH] = useState(15)


    useEffect(() => {
        let max = 2;
        data.forEach(day => {
            if (Number(day.total_orders) > max) {
                max = day.total_orders
            }
            if (Number(day.total_read_messages) > max) {
                max = day.total_read_messages
            }
            if (Number(day.total_opinions) > max) {
                max = day.total_opinions
            }
            if (Number(day.average_rating) > max) {
                max = day.average_rating
            }
        })
        setH(+max)
    }, [data]);
    console.log(data, h);

    return (
        <div style={{width: '100%', height: 250}}>
            <ResponsiveContainer>
                <LineChart

                    data={data}

                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="day"/>
                    <YAxis type="number" domain={['auto', +h]}/>
                    <Tooltip/>
                    <Legend/>

                    <Line strokeWidth={3} type="monotone" dataKey="total_orders" stroke="#8884d8"/>
                    <Line strokeWidth={3} type="monotone" dataKey="total_read_messages" stroke="#82ca9d"/>
                    <Line strokeWidth={3} type="monotone" dataKey="total_opinions" stroke="#883a81"/>
                    <Line strokeWidth={3} type="monotone" dataKey="average_rating" stroke="#318881"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default GeneralStatschar;
