import "./line.css";
import { useParams } from "react-router";
import { useState } from "react";
import { getAverageSessions } from "../../utils/data.js";
import { LineChart, XAxis, Tooltip, Line, YAxis } from "recharts";

export default function Lin(id) {
  const ID = useParams("id").id;
  const [Mock] = useState(false);
  const { data } = getAverageSessions(Mock, ID);

  const day = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  const dataFormated = data.sessions.map((item) => ({
    day: day[item.day],
    sessionLength: item.sessionLength,
  }));
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const sessionLength = payload[0].value;

      return <div className="line-tooltip">{`${sessionLength} min`}</div>;
    }
    return null;
  };

  return (
    <div className="lin">
      <h3 className="lin-title">Durée moyenne des sessions</h3>

      <LineChart data={dataFormated} width={250} height={200}>
        <XAxis
          dataKey="day"
          tickLine={false}
          tick={{
            fill: "#fff",
            fontSize: 16,
          }}
          axisLine={false}
        />
        <YAxis
          dataKey="sessionLength"
          domain={["dataMin - 20", "dataMax + 50"]}
          hide={true}
          axisLine={false}
        />
        <Tooltip
          animationEasing="ease-out"
          offset={40}
          wrapperStyle={{ outline: "none" }}
          content={<CustomTooltip />}
          active={false}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          dot={false}
          stroke="#FFF"
          strokeWidth={2}
          isAnimationActive={false}
          activeDot={{
            fill: "white",
            stroke: "rgba(255,255,255,0.3)",
            strokeWidth: 10,
            r: 5,
          }}
        />
      </LineChart>
    </div>
  );
}
