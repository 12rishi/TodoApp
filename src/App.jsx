import "bootstrap/dist/css/bootstrap.min.css";
import Todoappinput from "./components/Todoappinput";
import Deletetodoapp from "./components/Deletetodoapp";

import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [todoitems, settodoitems] = useState([]);
  const onNewItem = (itemName, itemDuedate) => {
    settodoitems((currValue) => [
      ...currValue,
      { name: itemName, date: itemDuedate },
    ]);
  };
  const handleDeleteItem = (todoItemsName) => {
    const newTodoItems = todoitems.filter(
      (item) => item.name !== todoItemsName
    );
    settodoitems(newTodoItems);
  };
  return (
    <center className="todoapp">
      <h1>To Do App</h1>
      <Todoappinput handleonNewItem={onNewItem} />
      {todoitems.length === 0 && <Message />}
      <Deletetodoapp todoitems={todoitems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
