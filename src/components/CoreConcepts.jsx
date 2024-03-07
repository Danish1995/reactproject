import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
export default function CoreConcepts() {
  return (
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
  );
}
