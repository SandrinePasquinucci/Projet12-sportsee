import "./dashboard.css";
import Header from "../../components/Header/Header";
import Toolbar from "../../components/Toolbar/Toolbar";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { getUserInfos } from "../../utils/data.js";
import Bar from "../../components/Bar/Bar.js";
import Line from "../../components/Line/Line.js";
import RadarPerf from "../../components/Radar/Radar.js";
import RadialBar from "../../components/RadialBar/RadialBar.js";
import CardInfo from "../../components/CardInfo/CardInfo.js";

export default function Dashboard(id) {
  const ID = useParams("id").id;
  const [Mock, setMock] = useState(false);
  const { data } = getUserInfos(Mock, ID);

  const todayScore = data.todayScore ? data.todayScore * 100 : data.score * 100;

  return (
    <>
      <Header />
      <Toolbar />

      <section className="dashboard">
        <div className="dashboard-banniere">
          <div className="dashboard-title">
            <h1>Bonjour </h1>
            <span className="dashboard-name">{data.userInfos.firstName}</span>
            <button
              onClick={() => {
                setMock(!Mock);
              }}
              className={Mock ? "active" : null}
            >
              {Mock ? "Données mockées" : "Données Back-End"}
            </button>
          </div>
          <p className="dashboard-message">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div className="dashboard-graph">
          <Bar user={id} />
          <Line user={id} />
          <RadarPerf user={id} />
          <RadialBar Info={todayScore} />
          <CardInfo Info={data.keyData} />
        </div>
      </section>
    </>
  );
}
