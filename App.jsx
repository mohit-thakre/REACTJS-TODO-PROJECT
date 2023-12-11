import React, { useState } from "react";
import Input from "./component/Input";
import Box from "./component/Box";

const App = () => {
  const [todo, setTodo] = useState([]);

  const addTodoHandler = (itemss) => {
    const newItem = {
      itemss,
      date: new Date().toLocaleDateString(),
    };

    setTodo([...todo, newItem]);
  };

  const removeTodo = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  return (
    <div className="bg-[#343F71] h-screen p-5">
      <div className="max-w-[450px] min-h-[500px] bg-[#FBC40E] rounded-2xl mx-auto">
        <Input handler={addTodoHandler} />
        <Box data={todo} removehandler={removeTodo} />
      </div>
    </div>
  );
};

export default App;
