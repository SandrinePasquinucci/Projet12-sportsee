import "./dashboard.css";
import Header from "../../components/Header/Header";
import Toolbar from "../../components/Toolbar/Toolbar";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { getUserInfos } from "../../utils/data.js";

export default function Dashboard(id) {
  const ID = useParams("id").id;
  const [Mock, setMock] = useState(false);
  const { data } = getUserInfos(Mock, ID);
  console.log(data);

  return (
    <>
      <Header />
      <Toolbar />

      <section className="dashboard">
        <div className="dashboard-title">
          <h1>Bonjour </h1>
          <span className="dashboard-name">{data.userInfos.firstName}</span>
          <button
            onClick={() => {
              setMock(!Mock);
            }}
            className={Mock ? "active" : null}
          >
            {Mock ? "Données mockées" : "Données du Back-End"}
          </button>
        </div>

        <p className="dashboard-message">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
    </>
  );
}
