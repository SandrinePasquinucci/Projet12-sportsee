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
        <ResponsiveContainer width={"100%"} height={263}>
          <RadarChart data={dataFormated}>
            <PolarGrid stroke="#fff" />
            <PolarAngleAxis dataKey="kind" tick={{ fill: "#fff" }} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
            <Radar
              dataKey="value"
              stroke="#FF0101"
              fill="#FF0101"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
