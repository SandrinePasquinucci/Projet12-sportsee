import "./cardinfo.css";
import calories from "../../assets/calories-icon.png";
import proteines from "../../assets/protein-icon.png";
import glucides from "../../assets/carbs-icon.png";
import lipides from "../../assets/fat-icon.png";

function CardInfo(Info) {
  return (
    <>
      <div className="cardinfo">
        <div className="cardinfo-item">
          <img src={calories} alt="calories" />
          <div className="item">
            <p className="item-valeur">{Info.Info.calorieCount}KCal</p>
            <p className="item-titre">Calories</p>
          </div>
        </div>
        <div className="cardinfo-item">
          <img src={proteines} alt="proteines" />
          <div className="item">
            <p className="item-valeur">{Info.Info.proteinCount}g</p>
            <p className="item-titre">Proteines</p>
          </div>
        </div>
        <div className="cardinfo-item">
          <img src={glucides} alt="glucides" />
          <div className="item">
            <p className="item-valeur">{Info.Info.carbohydrateCount}g</p>
            <p className="item-titre">Glucides</p>
          </div>
        </div>
        <div className="cardinfo-item">
          <img src={lipides} alt="lipides" />
          <div className="item">
            <p className="item-valeur">{Info.Info.lipidCount}g</p>
            <p className="item-titre">Lipides</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
