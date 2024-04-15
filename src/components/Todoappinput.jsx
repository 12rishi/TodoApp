import React, { useState } from "react";

function Todoappinput({ handleonNewItem }) {
  const [itemName, setitemName] = useState("");
  const [itemDuedate, setitemDuedate] = useState("");
  const handleNameChange = (event) => {
    setitemName(event.target.value);
  };
  const handleDateChange = (event) => {
    setitemDuedate(event.target.value);
  };
  const handleAddButtonClick = () => {
    handleonNewItem(itemName, itemDuedate);
    setitemDuedate("");
    setitemName("");
  };

  return (
    <div className="container todoapp__container ">
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter the list to be added"
            onChange={handleNameChange}
            value={itemName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={itemDuedate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success btns"
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoappinput;
