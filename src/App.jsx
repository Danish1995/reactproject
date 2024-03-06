import { useState } from "react";
// react hook. all fucntion start with use are react hooks
import { CORE_CONCEPTS } from "./data";
// this image javascript object or varaible that point that image that include path of that image

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  // This useState() will return and array which hold, current state value and a state updating fucntion. setSelectedTopic fucntion
  // will be use to update the value of selectedTopic
  {
    /* usstate has 2 rules
   should call at top level componenet for exampe just after App() here in this case, can not call in loops of further 
   components in the tree
   and react hooks must not be called outside of react component functions
   These hooks store data, which when change, will trigger the component  to which it belongs.
   */
  }

  function handleClick(selectedButton) {
    console.log("print some value= " + selectedButton);
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header></Header>
      {/* we can not call function Header() like this we can call as html tag and under the hood react will call the actuall function it self */}
      <main>
        <section id="core-concepts">
          <h2> Core concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* this is first way to get value from props we can do other way shown below. so with the help of spread operator we can extract all the key valuw 
            from an object, so in this given way this  ...CORE_CONCEPTS[0] will retun the first object of the array and this component take them as props so we 
            do not need to pass title description and image separatly*/}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

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
          {!selectedTopic && <p> please selcte a topic </p>}
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
      </main>
    </div>
  );
}

export default App;
