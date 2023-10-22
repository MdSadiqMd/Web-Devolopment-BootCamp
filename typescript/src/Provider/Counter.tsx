import React, { createContext, useContext, useState } from "react";

interface CounterProviderProps {
  children: React.ReactNode;
}

const CounterContext = createContext<CounterContextValue | null>(null);

interface CounterContextValue {
  value: number;
  setCount: (num: number) => void;
}

export const useCounter = () => {
  return useContext(CounterContext) as CounterContextValue;
}

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
  const [count, setCount] = useState<number>(0);

  const contextValue: CounterContextValue = {
    value: count,
    setCount: setCount,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContext;
