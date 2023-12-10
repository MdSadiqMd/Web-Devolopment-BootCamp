import { useState } from "react";

const Example = (props) => {
    useWhyDidYouUpate("Example", props);
    return <div>{props.count}</div>;
};

export default function App() {
  const [count, setCount] = useState(0);
  const onFn = () => {
    console.log("hello");
  };

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div>{count}</div>
      <Example fn={onFn} />
    </div>
  );
}
