import { useState,useRef,useEffect } from "react";

// Here we are creating a hook which stores the refernce of the existing states
// The useWhyDidYouUpate hook takes two arguments one is function and other is props 
// For testing we took two examples below one is onFn function which always render kkep it aside

// Other is Example Function which increases the count when we pass the Example function in "useWhyDidYouUpate" Function and click on Increment 
// then as there are prevProps(count:0) is already present as refernece in the hook (useRef()) and further the new prop had came into the function 
// the function will check whether the prevprop and the current prop is equal or not, if not then the prop is updated so if updated then the updated 
// prop is added into the whyUpdated empty array and if whyUpdated array length is > 1 it will print the array onto the console
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
      <Example fn={count} fn1={onFn} />
    </div>
  );
}
