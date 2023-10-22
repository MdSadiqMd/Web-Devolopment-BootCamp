import React from 'react';

// Giving props in TypeScript
interface MyButtonProps {
  text: string;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <button>{props.text}</button>
  );
}

export default MyButton;
