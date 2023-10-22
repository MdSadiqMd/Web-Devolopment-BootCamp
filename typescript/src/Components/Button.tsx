import React from 'react';

// Giving props in TypeScript
interface MyButtonProps {
  text: string;
  onClick?:()=>void; // ***By Giving "?" we make a Prop Optional such that if not it will return error if it is not used
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
    //(or)
    //const {text,onClick}=props;
    //<button onClick={onClick}>{text}</button>
  );
}

export default MyButton;
