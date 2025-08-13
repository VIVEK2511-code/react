import React from "react";

import Header from "./component/Header";
import TodoItem from "./component/Todoitem";
import Button from "./component/button";

import CounterComponent from "./component/countercomponent";
import './style.css';
const App = () => {
  return (
    <div  className="todo-container">
         <CounterComponent />
      <Header />
   

      <TodoItem  text="Eat"/>
      <TodoItem text="code"/>
       <TodoItem  text="sleep"/>
        <TodoItem  text="repeat"/>
         <TodoItem  text="Run"/>
      <Button />
    </div>
  );
};

export default App;
