import "./radar.css";
import { useParams } from "react-router";
import { useState } from "react";
import { getPerformances } from "../../utils/data.js";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

export default function RadarPerf(id) {
  const ID = useParams("id").id;
  const [Mock] = useState(false);
  const { data } = getPerformances(Mock, ID);
  const categorie = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  const dataFormated = data.data.map((item) => ({
    value: item.value,
    kind: categorie[item.kind],
  }));

  return (
    <>
      <div className="radar">
        <RadarChart
          outerRadius={80}
          width={260}
          height={263}
          data={dataFormated}
          style={{
            color: "#000",

            borderRadius: "5px",
          }}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fontSize: "12px", fontWeigth: 500, fill: "#FFF" }}
          />
          <Radar
            name="Performance"
            dataKey="value"
            fillOpacity={0.7}
            stroke="#FF0101"
            fill="#FF0101"
            margin={{ left: 5, right: 5 }}
          />
        </RadarChart>
      </div>
    </>
  );
}
