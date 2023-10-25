import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ListFilter from "./components/ListFilter";
import Alert from "./components/Alert";

const App = () => {
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
      <Alert>
        Hello World, <span className="btn btn-danger">Day 0</span>
      </Alert>
    </>
  );
};

export default App;
