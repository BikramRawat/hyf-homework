// creating a React component with expressions
function Add(props) {
  return (
    <div>
      <h3>
        The sum of {props.x} & {props.y} = {props.x + props.y}{" "}
      </h3>
    </div>
  );
}

// Creating a React component with string and expression
function Greeting(props) {
  return (
    <h2>
      Hello! {props.name} <Add x={5} y={7} />
    </h2>
  );
}

export default Greeting;
