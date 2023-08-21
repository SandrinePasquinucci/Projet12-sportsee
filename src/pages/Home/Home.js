import "./home.css";
import { Link } from "react-router-dom";

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

      <nav className="users__nav">
        <ul>
          <li>
            <Link to={`/dashboard/12`} className="user">
              Karl Dovineau
            </Link>
          </li>
          <li>
            <Link to={`/dashboard/18`} className="user">
              Cécilia Ratorez
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Home;
