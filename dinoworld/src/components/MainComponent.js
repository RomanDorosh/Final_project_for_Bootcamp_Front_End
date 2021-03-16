import DinoCardComponent from "./DinoCardComponent";
import "./MainStyle.css";

function MainComponent({ dinos }) {
  return (
    <div className="grid-container">
      {dinos.map(dino => {
        return <DinoCardComponent key={dino.ID} {...dino} />;
      })}
    </div>
  );
}

export default MainComponent;
