import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


const GeneralStatschar = ({data}) => {
    return (
        <div style={{width: '100%', height: 250}}>
            <ResponsiveContainer>
                <LineChart

                    data={data}

                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="day"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>

                    <Line strokeWidth={3} type="monotone" label={"Total orders"} dataKey="total_orders" stroke="#8884d8"/>
                    <Line strokeWidth={3} type="monotone" dataKey="total_read_messages" stroke="#82ca9d"/>
                    <Line strokeWidth={3} type="monotone" dataKey="total_opinions" stroke="#883a81"/>
                    <Line strokeWidth={3} type="monotone" dataKey="average_rating" stroke="#318881"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default GeneralStatschar;
