import React, { useState } from "react";

const ListGroup = () => {
  const cityList = ["Sukkur", "Shikarpur", "Larkana", "Rohri"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
  const cityStartingWithS = cityList.map(
    (item) =>
      item.charAt(0) === "S" && (
        <li key={item} className="list-group-item">
          {item}
        </li>
      )
  );

  return (
    <div>
      <h1>List</h1>
      <ul className="list-group">{listItem}</ul>
    </div>
  );
};

export default ListGroup;
