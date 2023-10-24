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

  return (
    <>
      <ListGroup cityList={cityList} heading="Cities" />
    </>
  );
};

export default App;
