import "./home.css";
import { NavLink } from "react-router-dom";
import SportSeeLogo from "../../assets/SportSeeLogo.png";
import { useState } from "react";

function Home() {
  const [isActive, setIsActive] = useState(false);

  function changeName() {
    setIsActive(!isActive);
  }
  return (
    <section className="home">
      <div className="header__logo">
        <img src={SportSeeLogo} alt="SportSee" width={178} height={60} />
      </div>
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
            <NavLink to={`/dashboard/12`} className="user">
              Karl Dovineau
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/18`} className="user">
              Cécilia Ratorez
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Home;
