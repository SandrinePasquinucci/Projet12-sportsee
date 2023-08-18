import "./home.css";
import { Link } from "react-router-dom";
import data from "../../data/mockdata.json";
import { useState } from "react";

function Home() {
  const [isActive, setIsActive] = useState(false);

  function changeName() {
    setIsActive(!isActive);
  }
  return (
    <section className="home">
      <p>Selectionnez votre mode de connexion :</p>
      {isActive === false ? (
        <button onClick={changeName}>Mock</button>
      ) : (
        <button onClick={changeName}>API</button>
      )}
      <p>Puis cliquez sur l'utilisateur de votre choix :</p>
      {data.users.map((user) => (
        <nav className="users__nav">
          <ul>
            <li>
              <Link to={`/dashboard/${user.id}`} className="user">
                {user.userInfos.firstName} {user.userInfos.lastName}
              </Link>
            </li>
          </ul>
        </nav>
      ))}
    </section>
  );
}

export default Home;
