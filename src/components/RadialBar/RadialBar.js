import "./radialbar.css";
import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";
function Radial({ Info }) {
  const formattedData = [
    {
      name: `${Info}% de votre objectif`,
      value: Info,
    },
  ];

  return (
    <>
      <div className="radial">
        <h3 className="radial-title">Score</h3>
        {/* <ResponsiveContainer width={"100%"} height={263}> */}
        <PieChart width={250} height={200}>
          <Pie
            data={[{ Info: 100 }]}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={90}
            startAngle={0}
            endAngle={370}
            dataKey="value"
            fill="#fff"
          />
          <Pie
            data={formattedData}
            dataKey="value"
            cx="50%"
            cy="50%"
            startAngle={190}
            endAngle={150}
            innerRadius={90}
            outerRadius={100}
            fill="#FE293B"
            cornerRadius={10}
          />
          <Legend
            content={() => (
              <div className="legend">
                <p className="legend__titre">{Info}%</p>
                <div className="legend__titreSuite">
                  <p>de votre</p>
                  <p>objectif</p>
                </div>
              </div>
            )}
            layout="vertical"
            verticalAlign="middle"
          />
        </PieChart>
        {/* </ResponsiveContainer> */}
      </div>
    </>
  );
}

export default Radial;
