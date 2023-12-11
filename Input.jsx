import React, { useRef } from "react";

const Input = (props) => {
  const inputbox = useRef();

  const handleActualData = () => {
    props.handler(inputbox.current.value);
    inputbox.current.value = "";
  };

  return (
    <div className="p-3 flex justify-around ">
      <input
        className="p-3 w-[70%] border-2 border-blue-500 rounded-3xl focus:outline-none focus:border-blue-700"
        type="text"
        placeholder="Enter your task here"
        ref={inputbox}
      />
      <div>
        <button
          className="p-3 bg-blue-500 hover:bg-blue-700 text-white border-2 border-blue-700 rounded-3xl"
          onClick={handleActualData}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
