import { useParams } from "react-router";

export default function DinoComponent() {
  // const { dinos } = useContext(DinoContext);

  // const { ID } = useParams();

  console.log("hello");

  // let url = `http://localhost/finalsymfonyproject/public/index.php/dinosaur/${id}`;

  // const [dino, setDino] = useState([]);

  // // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   console.count("single call");
  //   fetch(url)
  //     .then(resp => resp.json())
  //     .then(resp => {
  //       setDino(resp);
  //       // setIsLoaded(true);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  // console.log(dino);

  return (
    <div>
      {/* <h1>Hello I am Dino</h1>
      <img src={dinos.img} alt="" />
      <h3>{dinos.name}</h3>
      <h6>Weight: {dinos.weight}</h6>
      <h6>Height: {dinos.height}</h6>
      <h6>Diet: {dinos.diet}</h6>
      <h6>Top Speed: {dinos.topSpeed}</h6>
      <h6>Period: {dinos.period}</h6>
      <button
        style={{
          backgroundColor: "rgba(189, 122, 34, 0.3)",
          border: "none"
        }}
      ></button> */}
      <h1>Hello bro</h1>
    </div>
  );
}
