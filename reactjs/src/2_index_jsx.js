// Understanding JSX
import React from "react";
import ReactDOM from "react-dom";

function MyComponent() {
  const name = "Sadiq";
  // For returning one component
  //return <h1>Hello From Component</h1>;

  // Inserting Images
  const link="https://google.com";


  // For returning Multiple Components
  return (
    <> {/*Comment lines in / * * / and close in {} */ /*This is called fragmentation we need to return the html in a div or if we not want to we can return in empty brackets called fragmentation */}
      <h2>Hello {name}</h2>
      <h3>Hello {2 + 3}</h3>
      <a href={link}>Click me</a>;
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<MyComponent />, root);
