import "./card-list.style.css";
import CardContainer from "../card/card-container.component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer monster={monster} />;
    })}
  </div>
);

export default CardList;
