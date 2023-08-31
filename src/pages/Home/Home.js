import "./home.css";
// import { NavLink } from "react-router-dom";
import SportSeeLogo from "../../assets/SportSeeLogo.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="home">
      <div className="header-logo">
        <img src={SportSeeLogo} alt="SportSee" width={178} height={60} />
      </div>

      <p>Cliquez sur l'utilisateur de votre choix :</p>
      <nav className="users-nav">
        <ul>
          <li>
            {/* <NavLink to={`/dashboard/12`} className="user">
              Karl Dovineau
            </NavLink> */}
            <Link to={`dashboard/12`} className="user">
              Karl Dovineau
            </Link>
          </li>
          <li>
            {/* <NavLink to={`/dashboard/18`} className="user">
              Cécilia Ratorez
            </NavLink> */}
            <Link to={`dashboard/18`} className="user">
              Cécilia Ratorez
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Home;
