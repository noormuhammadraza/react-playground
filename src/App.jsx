import Button from "./components/Button";
import React from "react";
import ListGroup from "./components/ListGroup";
import ListFilter from "./components/ListFilter";

const App = () => {
  const cityList = [
    "Sukkur",
    "Shikarpur",
    "Larkana",
    "Rohri",
    "Karachi",
    "Lahore",
    "Islamabad",
    "Quetta",
    "Peshawar",
  ];

  const handleSelect = (item) => console.log(item);

  return (
    <>
      <ListGroup cityList={cityList} heading="Cities" onSelect={handleSelect} />
    </>
  );
};

export default App;
