import "./accueil.css";
import { useState, useEffect } from "react";

function Accueil() {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("INITIALISATION");
  }, []);

  function changeName() {
    setIsActive(!isActive);
  }

  return (
    <div className="accueil">
      <h3>ACCUEIl</h3>
      {isActive === false ? (
        <button onClick={changeName}>Bouton 1</button>
      ) : (
        <button onClick={changeName}>Bouton 2</button>
      )}
    </div>
  );
}

// const test = tableau.length < 0 ? true : false;

export default Accueil;
