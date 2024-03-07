export default function Section({ title, children, ...props }) {
  // we can add default props value using Section({ title ="This is title" })

  // this section is a wrapper componenet
  // ...props this tell to take all other props and merge them onp props objecct for example id here
  return (
    <section {...props}>
      {/* //id="examples" done by ...props but we can also use id="examples" we do not need to explicity and individually pass
      the each propertie one by one ...props will do for us
      */}

      {/* In this case, the props object inside your Section component will contain { id: "customId", className: "customClass",
       data-custom: "123" }. The spread operator (...props) is a convenient way to handle such scenarios where you want to pass
        along all remaining properties without explicitly specifying each one in the component's signature. */}

      <h2>{title}</h2>
      {children}
    </section>
  );
}
