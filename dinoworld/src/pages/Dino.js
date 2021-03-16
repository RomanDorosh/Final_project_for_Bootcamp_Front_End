import DinoComponent from "../components/DinoComponent";
import { useContext } from "react";
import { DinoContext } from "../App";

export default function Dino() {
  const dinos = useContext(DinoContext);

  return (
    <div>
      <DinoComponent dinos={dinos} />
    </div>
  );
}
