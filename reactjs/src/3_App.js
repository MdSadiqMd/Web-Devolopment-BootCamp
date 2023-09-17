import React from "react";
import Header from "./3_Components/header";
import TodoItem from "./3_Components/TodoItem";
import Button from "./3_Components/button";
import "./3_style.css";

const App = () => {
  return (
    <div className="Container">
      <Header />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Button />
    </div>
  );
};

export default App;
