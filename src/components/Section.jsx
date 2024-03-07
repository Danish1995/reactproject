export default function Section({ title, children, ...props }) {
  // this section is a wrapper componenet
  // ...props this tell to take all other props and merge them onp props objecct for example id here
  return (
    <section {...props}>
      {/* //id="examples" done by ...props but we can also use id="examples"*/}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
