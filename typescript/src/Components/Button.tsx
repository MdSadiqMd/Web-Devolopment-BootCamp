import React, { useState } from 'react';

// Giving props in TypeScript
interface MyButtonProps {
  text: string;
  onClick?:()=>void; // ***By Giving "?" we make a Prop Optional such that if not it will return error if it is not used
}

interface Book{
    name:string;
    price:number;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  // Hooks in TypeScript (Implicit casting)
  //const [value,setValue]=useState<number>(0);
  // Hooks Using Interface (Expicit casting)
  const [value,setValue]=useState<Book>({
    name:"One",
    price:10,
  });
  return (
    <>
    {/*<h1>{value}</h1>
    <button onClick={() => setValue(value + 1)}>{props.text}</button>*/}
    <h1>{value.name} and {value.price}</h1>
    <button onClick={() => setValue({name:"Two",price:20})}>{props.text}</button>
    </>
    //(or)
    //const {text,onClick}=props;
    //<button onClick={onClick}>{text}</button>
  );
}

export default MyButton;
