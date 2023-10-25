import { useState } from "react";

const ListGroup = ({ cityList, heading, onSelect }) => {
  // const [cityList, setCityList] = useState([
  //   "Sukkur",
  //   "Shikarpur",
  //   "Larkana",
  //   "Rohri",
  //   "Karachi",
  //   "Lahore",
  //   "Islamabad",
  //   "Quetta",
  //   "Peshawar",
  // ]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = () => {
  //   const cityStartingWithS = cityList.filter((item) => item.charAt(0) === "S");
  //   setCityList(cityStartingWithS);
  // };

  const listItem = cityList.map((item, index) => (
    <li
      key={index}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      onClick={() => {
        setSelectedIndex(index);
        onSelect(item);
      }}
    >
      {item}
    </li>
  ));

  return (
    <div>
      <h1>{heading}</h1>
      <ul className="list-group">{listItem}</ul>
      {/* <button className="btn btn-warning mt-5" onClick={handleClick}>
        Cities Starting With Letter S
      </button> */}
    </div>
  );
};

export default ListGroup;
