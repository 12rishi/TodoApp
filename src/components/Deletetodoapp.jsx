import React from "react";
import Todoconatiner from "./Todoconatiner";

function Deletetodoapp({ todoitems, onDeleteClick }) {
  return (
    <div className="itemcontainer">
      {todoitems.map((item) => (
        <Todoconatiner
          todotitle={item.name}
          tododate={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

export default Deletetodoapp;
