import "./dashboard.css";
import { useParams } from "react-router-dom";
import { getUserInfos } from "../../utils/data.js";

export default function Dashboard(id) {
  const ID = useParams("id").id;
  const { data } = getUserInfos(ID);

  console.log(getUserInfos(ID));
  return (
    <>
      <section className="dashboard">
        <h1 className="dashboard-title" key={id}>
          Bonjour
        </h1>
        <p>{data.firstName}</p>
        <p className="dashboard-message">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
    </>
  );
}
