import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ListFilter from "./components/ListFilter";
import Alert from "./components/Alert";
import ShowAlertButton from "./components/ShowAlertButton";
import { useState } from "react";

const App = () => {
  const [alertVisibility, setAlertVisibility] = useState(false);


  // const cityList = [
  //   "Sukkur",
  //   "Shikarpur",
  //   "Larkana",
  //   "Rohri",
  //   "Karachi",
  //   "Lahore",
  //   "Islamabad",
  //   "Quetta",
  //   "Peshawar",
  // ];

  // const handleSelect = (item) => console.log(item);

  return (
    <>
      {/* <ListGroup cityList={cityList} heading="Cities" onSelect={handleSelect} /> */}
      {/* <Alert message={"This is an Alert"}/> */}
      { alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <ShowAlertButton onClick={() => setAlertVisibility(true)}/>
    </>
  );
};

export default App;
