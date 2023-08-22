import "./dashboard.css";
import Header from "../../components/Header/Header";
import Toolbar from "../../components/Toolbar/Toolbar";
import { useParams } from "react-router-dom";
import { getUserInfos } from "../../utils/data.js";

export default function Dashboard(id) {
  const ID = useParams("id").id;

  const { data } = getUserInfos(ID);

  return (
    <>
      <Header />
      <Toolbar />

      <section className="dashboard">
        <h1 className="dashboard-title">Bonjour</h1>
        <p>{data.userInfos.firstName}</p>
        <p className="dashboard-message">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
    </>
  );
}
