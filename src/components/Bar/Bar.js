import "./bar.css";
import { useParams } from "react-router";
import { useState } from "react";
import { getActivityInfos } from "../../utils/data.js";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

function BarFunction(id) {
  const ID = useParams("id").id;
  const [Mock] = useState(false);
  const { data } = getActivityInfos(Mock, ID);

  const dataFormated = data.sessions.map((item, index) => ({
    day: (index + 1).toString(),
    "Poids (kg)": item.kilogram,
    "Calories brûlées (kCal)": item.calories,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="barChart-tooltip ">
          <p className="barChart-tooltip-item">{payload[0].payload.date}</p>
          <p className="barChart-tooltip-item">{`${payload[0].value} kg`}</p>
          <p className="barChart-tooltip-item">{`${payload[1].value} kCal`}</p>
          <div
            className="barChart-tooltip-cursor"
            style={{ left: `${payload[0].offsetX}px` }}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="barChart">
      <h3 className="barChart__title"> Activité quotidienne</h3>

      <div className="barChart__chart">
        <ResponsiveContainer width={"100%"} height={250}>
          <BarChart data={dataFormated}>
            <CartesianGrid
              strokeDasharray="2 2"
              horizontal={true}
              vertical={false}
            />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />

            <YAxis
              tickLine={false}
              axisLine={false}
              orientation="right"
              yAxisId="Poids (kg)"
              type="number"
              dataKey="Poids (kg)"
              domain={["dataMin - 2", "dataMax + 2"]}
              allowDataOverflow={true}
              allowDecimals={false}
            />
            <YAxis
              yAxisId="Calories brûlées (kCal)"
              type="number"
              dataKey="Calories brûlées (kCal)"
              domain={["dataMin - 20", "dataMax + 10"]}
              hide={true}
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize="8"
              height={80}
            />
            <Bar
              yAxisId="Poids (kg)"
              dataKey="Poids (kg)"
              fill="#282D30"
              radius={[10, 10, 0, 0]}
              barSize={10}
            />

            <Bar
              yAxisId="Calories brûlées (kCal)"
              dataKey="Calories brûlées (kCal)"
              fill="#E60000"
              radius={[10, 10, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarFunction;
