import { useState } from "react";
// react hook. all fucntion start with use are react hooks
import { CORE_CONCEPTS } from "./data";
// this image javascript object or varaible that point that image that include path of that image

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Exampls from "./components/Exampls.jsx";
function App() {
  // const [selectedTopic, setSelectedTopic] = useState();
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

  return (
    <>
      <Header></Header>
      {/* we can not call function Header() like this we can call as html tag and under the hood react will call the actuall function it self */}
      <main>
        <CoreConcepts></CoreConcepts>
        <Exampls></Exampls>
      </main>
    </>
  );
}

export default App;
