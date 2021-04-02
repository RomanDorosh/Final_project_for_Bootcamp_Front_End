import { useContext, useState } from "react";
import * as IconName from "react-icons/md";
import { Link } from "react-router-dom";
import { urlApi, DinoContext } from "../../App";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

export default function DinoCardComponent({
  ID,
  name,
  weight,
  height,
  lenght,
  diet,
  top_speed,
  period,
  img,
  continent,
  users
  // clickedButton,
  // setClickedButton
}) {
  const { jwt } = useContext(DinoContext);

  // const [clickedButton, setClickedButton] = useState(false);
  // console.log(clickedButton);

  // console.log(setClickedButton);
  // console.log(clickedButton);
  // console.log(users);
  function toggleDinosaur() {
    console.log("im clicked");
    // setClickedButton(!clickedButton);

    if (users.length !== 0) {
      fetch(`${urlApi}/favorite/remove/${ID}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + jwt
        }
      })
        .then(response => response.json())

        .catch(error => console.log(error));

      Swal.fire(`You have removed ${name} from your favorite dinos`);
      // alert(`You have removed ${name} from your favorite dinos`);
    } else {
      fetch(`${urlApi}/favorite/add/${ID}`, {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + jwt
        }
      })
        .then(response => response.json())

        .catch(error => console.log(error));
      Swal.fire(`You have added ${name} to your favorite dinos`);

      // alert(`You have added ${name} to your favorite dinos`);
    }
  }

  let actionButton = "buttonFovorite";

  if (jwt) {
    // let decoded = jwt_decode(jwt);
    users.forEach(element => {
      if (true) {
        // console.log(element);
        actionButton = "buttonFovoriteActive";
      }
    });
  }

  return (
    <div className="grid-card">
      {/* Using Link with path indicated in route in App.js we open the Dino.js with selected dino ID in URL*/}

      <Link
        to={`/Dino/${ID}`}
        style={{ textDecoration: "none", color: "rgb(53, 53, 53)" }}
      >
        <img src={`${urlApi}/images/${img}`} alt="" />
        <h3>{name}</h3>
        <h6>Weight: {weight} kilograms</h6>
        <h6>Height: {height} meters</h6>
        <h6>Length: {lenght} meters</h6>
        <h6>Diet: {diet.name}</h6>
        <h6>Top Speed: {top_speed} km/h</h6>
        <h6>Period: {period.name}</h6>
        <h6>Continent: {continent.name}</h6>
      </Link>
      <div style={{ textAlign: "center", color: "#ff6347" }}>
        {jwt && (
          <button className={actionButton} onClick={() => toggleDinosaur()}>
            <IconName.MdFavorite size={25} />
          </button>
        )}
      </div>
    </div>
  );
}
