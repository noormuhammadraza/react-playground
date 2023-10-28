import Counter from "./components/Counter";
import ListGroup from "./components/ListGroup";
import ListFilter from "./components/ListFilter";
import Alert from "./components/Alert";
import ShowAlertButton from "./components/ShowAlertButton";
import { useState } from "react";
import Login from "./components/Login";

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
      {/* {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <ShowAlertButton onClick={() => setAlertVisibility(true)} /> */}
      {/* <Counter/> */}
      {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>Login Successful</Alert>}
      <Login onClick={() => setAlertVisibility(true)}/>
    </>
  );
};

export default App;
