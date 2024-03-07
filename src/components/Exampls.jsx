import { EXAMPLES } from "../data.js";
import { useState } from "react";
import TabButton from "./TabButton.jsx";
export default function Exampls() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selectedButton) {
    console.log("print some value= " + selectedButton);
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={() => handleClick("components")}>
          {/* () => handleClick("Components") this code will execute when button is clicked this is very common pratice in react
              when calling and function when button is clicked 
              while passing functions only will run when this line of code is executed*/}
          Components
        </TabButton>
        <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
        <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
        <TabButton onSelect={() => handleClick("state")}>State</TabButton>
      </menu>
      {!selectedTopic && <p> please select a tab</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
