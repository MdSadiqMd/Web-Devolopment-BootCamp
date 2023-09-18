import React from "react";
import Header from "./3_Components/header";
import TodoItem from "./3_Components/TodoItem";
import Button from "./3_Components/button";
import "./3_style.css";

const App = () => {
  return (
    <div className="Container">
      <Header title="Todie-App"/>
      <TodoItem text="Namaz"/>
      <TodoItem rext="Eat"/>
      <TodoItem text="Drink"/>
      <TodoItem text="Study"/>
      <TodoItem text="Sleep"/>
      <Button />
    </div>
  );
};

export default App;
