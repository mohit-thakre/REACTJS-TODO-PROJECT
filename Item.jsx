import React, { useState } from "react";

const Item = (props) => {
  const [done, setDone] = useState(false);

  const handleToggleDone = () => {
    setDone(!done);
  };

  const handleDelete = () => {
    props.onDelete();
  };

  return (
    <div
      className={`p-3 w-full border-b-2 border-${
        done ? "green" : "red"
      }-800 flex justify-between items-center transition duration-300 ease-in-out transform hover:scale-105`}
    >
      <div className="p-2">
        <span
          onClick={handleToggleDone}
          className={` ${done ? "line-through" : ""} p-2 select-none  text-2xl`}
        >
          {props.itemss}
        </span>
        <span className="text-sm"> {props.date}</span>
      </div>
      <div>
        <button
          className="p-2 bg-red-500 hover:bg-red-700 text-white rounded-2xl"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
