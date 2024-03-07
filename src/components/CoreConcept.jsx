export default function CoreConcept(props) {
  // function CoreConcept({image, title, description}) { instead of this first line we can use this object destructing then we get rid of props work and direct
  // use them image title and description and this approach work with the both approches we use while calling this functional component
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
