import "./toolbar.css";
import YogaIcon from "../../assets/yoga-icon.svg";
import SwimmingIcon from "../../assets/swimming-icon.svg";
import BikeIcon from "../../assets/bike-icon.svg";
import DumbbellIcon from "../../assets/dumbbell-icon.svg";

function Toolbar() {
  return (
    <section className="toolbar">
      <nav className="nav-container">
        <ul className="list-icon">
          <li className="list-icon-item">
            <img className="icon" src={YogaIcon} alt={YogaIcon} />
          </li>
          <li className="list-icon-item">
            <img className="icon" src={SwimmingIcon} alt={SwimmingIcon} />
          </li>
          <li className="list-icon-item">
            <img className="icon" src={BikeIcon} alt={BikeIcon} />
          </li>
          <li className="list-icon-item">
            <img className="icon" src={DumbbellIcon} alt={DumbbellIcon} />
          </li>
        </ul>
      </nav>
      <div className="text-container">
        <p>Copyright, SportSee 2022</p>
      </div>
    </section>
  );
}

export default Toolbar;
