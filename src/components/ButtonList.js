import React from "react";
import MyButton from "./MyButton";

const ButtonList = () => {
  const categories = [
    "Music",
    "Punjabi",
    "Starplus",
    "Cricket",
    "Soccer",
    "Comedy",
    "South",
    "Gujarati",
    "Punjabi",
    "Bhojpuri",
    "Malyali",
    "American",
  ];

  return (
    <div className="flex first:m-0">
      {categories.map((category) => (
        <MyButton name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
