export default function TabButton({ children, onSelect }) {
  // In this case, using the syntax { children, onSelect } to destructure the properties directly from the props object.
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
      {/* calling onSelect without props is because of destructuring */}
      {/* important: only use name of the function as value without paranthesis()
      handleClick() will be executed when this button line is executed or this jsx line executed on screen
      handleClick will be executed when button is clicked
      */}
      {/* this onClick listener method can be call on any element even on li here  */}
    </li>
  );
}
