import React, { useState } from "react";

const ListGroup = () => {
  const [cityList, setCityList] = useState([
    "Sukkur",
    "Shikarpur",
    "Larkana",
    "Rohri",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = () => {
    console.log("Clicked");
    const cityStartingWithS = cityList.filter(
      (item) => item.charAt(0) === "S"
    );
    setCityList(cityStartingWithS);
  };

  const listItem = cityList.map((item, index) => (
    <li
      key={index}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      onClick={() => setSelectedIndex(index)}
    >
      {item}
    </li>
  ));

  return (
    <div>
      <h1>List</h1>
      <ul className="list-group">{listItem}</ul>
      <button className="btn btn-warning mt-5" onClick={handleClick}>
        Cities Starting With Letter S
      </button>
    </div>
  );
};

export default ListGroup;
