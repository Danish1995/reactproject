import reactImage from "./assets/react-core-concepts.png";

// this image javascript object or varaible that point that image that include path of that image

const reactDescriptions = ["Basic", "crucial", "core"];

function genRandomInt(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

const desc = reactDescriptions[genRandomInt(2)];

function Header() {
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

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started! </h2>
      </main>
    </div>
  );
}

export default App;
