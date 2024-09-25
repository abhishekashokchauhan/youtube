import React from "react";

const MyButton = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-200 rounded-lg px-3 m-1">{name}</button>
    </div>
  );
};

export default MyButton;
