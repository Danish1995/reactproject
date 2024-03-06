import reactImage from "../../assets/react-core-concepts.png";
// with double dot we go one steop back in component folder
import "./Header.css";
const reactDescriptions = ["Basic", "crucial", "core"];

function genRandomInt(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

const desc = reactDescriptions[genRandomInt(2)];

export default function Header() {
  // to use in the next file we need to export this component
  return (
    <div>
      <header>
        {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
        {/* images like this can be ignore at bundling process more optimal way to import images on top */}
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {desc} React concepts you will need for almost any app you are going
          to build!
        </p>
      </header>
    </div>
  );
}
