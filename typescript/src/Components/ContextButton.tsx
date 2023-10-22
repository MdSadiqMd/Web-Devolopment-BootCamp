import React from 'react';
import { useCounter } from '../Provider/Counter';

const ContextButton: React.FC = () => {
  const context = useCounter();

  return (
    <div className="App">
      <h1 onClick={(e) => context.setCount(context.value + 1)}>
        {context.value}
      </h1>
    </div>
  );
}

export default ContextButton;
