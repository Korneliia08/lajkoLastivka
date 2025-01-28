import {Cell, Pie, PieChart, ResponsiveContainer, Sector} from "recharts";
import {useState} from "react";


const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value} = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);

    // Współrzędne dla krótszej linii i skierowanej ku środkowi
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 20) * cos; // Skrócone, żeby linia była krótsza
    const my = cy + (outerRadius + 20) * sin; // Skrócone, żeby linia była krótsza

    // Współrzędne końca strzałki, zbliżającej się ku środkowi wykresu
    const ex = cx + (outerRadius + 20) * cos; // Końcówka strzałki jest bliżej środka
    const ey = cy + (outerRadius + 30) * sin - 20;

    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} fontWeight="bold" textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
            <text x={ex + (cos >= 0 ? 0.8 : -0.8) * 15} y={ey} textAnchor={textAnchor} fill="#333">{`Likes ${value}`}</text>
            <text x={ex + (cos >= 0 ? 0.8 : -0.8) * 15} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const LikeUnlikeChar = ({data, colors}) => {

    const [selected, setSelected] = useState(0);
    return (

        <ResponsiveContainer minWidth={350} maxHeight={250}>
            <PieChart>

                <Pie
                    activeIndex={selected}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="80%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} onMouseEnter={() => {
                            setSelected(index)
                        }} fill={colors[index % colors.length]}/>
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );

}
export default LikeUnlikeChar;
