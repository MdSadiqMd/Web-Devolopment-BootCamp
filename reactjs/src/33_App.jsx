import { useState,useRef,useEffect } from "react";

// 
const useWhyDidYouUpate = (name, props) => {
    const prevProps = useRef();
  
    useEffect(() => {
      if (prevProps.current) {
        const keys = Object.keys({ ...prevProps.current, ...props });
  
        const whyUpated = {};
  
        keys.forEach((key) => {
          if (typeof prevProps.current[key] === "object" && props[key] === "object") {
            if (JSON.stringify(prevProps.current[key]) !==JSON.stringify(props[key])) {
              whyUpated[key] = {
                from: prevProps.current[key],
                to: props[key]
              };
            }
          } else {
            if (prevProps.current[key] !== props[key]) {
              whyUpated[key] = {
                from: prevProps.current[key],
                to: props[key]
              };
            }
          }
        });
  
        if (Object.keys(whyUpated).length) {
          console.log("This has caused re-render", whyUpated);
        }
      }
  
      prevProps.current = props;
    }, [name, props]);
};

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
