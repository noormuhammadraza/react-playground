import Counter from "./components/Counter";
import ListGroup from "./components/ListGroup";
import MidExam from "./components/MidExam";
import Alert from "./components/Alert";
import ShowAlertButton from "./components/ShowAlertButton";
import { useState } from "react";
import Login from "./components/Login";
import Like from "./components/Like";

const App = () => {
  // State passed to MidExam Component as Props
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     age: 25,
  //     city: "New York",
  //     occupation: "Engineer",
  //   },

  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     age: 30,
  //     city: "San Francisco",
  //     occupation: "Designer",
  //   },

  //   {
  //     id: 3,
  //     name: "Bob Johnson",
  //     age: 28,
  //     city: "Chicago",
  //     occupation: "Accountant",
  //   },

  //   {
  //     id: 4,
  //     name: "Alice Brown",
  //     age: 35,
  //     city: "Los Angeles",
  //     occupation: "Teacher",
  //   },

  //   {
  //     id: 5,
  //     name: "Charlie Wilson",
  //     age: 40,
  //     city: "Houston",
  //     occupation: "Doctor",
  //   },

  //   { id: 6, name: "Eva Davis", age: 22, city: "Miami", occupation: "Artist" },

  //   {
  //     id: 7,
  //     name: "Frank Miller",
  //     age: 32,
  //     city: "Seattle",
  //     occupation: "Software Engineer",
  //   },

  //   {
  //     id: 8,
  //     name: "Grace Taylor",
  //     age: 45,
  //     city: "Boston",
  //     occupation: "Lawyer",
  //   },

  //   {
  //     id: 9,
  //     name: "Henry Clark",
  //     age: 28,
  //     city: "Denver",
  //     occupation: "Marketing Manager",
  //   },

  //   {
  //     id: 10,
  //     name: "Ivy Adams",
  //     age: 33,
  //     city: "Atlanta",
  //     occupation: "Entrepreneur",
  //   },
  // ]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    // setGame({ ...game, player: { ...game.player, name: "Mrnoobhere" } });
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Cheese"],
    });
  };

  // For Login and Alert Components
  // const [alertVisibility, setAlertVisibility] = useState(false);
  // const [alertMessage, setAlertMessage] = useState("");

  // For ListGroup Component
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

  // For Alert Component
  // const onClick = (alertMessage) => {
  //   if (alertMessage === "Successful") {
  //     setAlertMessage(alertMessage);
  //     setAlertVisibility(true);
  //   } else {
  //     setAlertMessage(alertMessage);
  //     setAlertVisibility(true);
  //   }
  // };

  return (
    <>
      {/* <h1>{game.player.name}</h1> */}
      <ul>
        {pizza.toppings.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click here to add a topping</button>

      {/* <Like onClick={() => console.log("Clicked")} /> */}

      {/* <ListGroup cityList={cityList} heading="Cities" onSelect={handleSelect} /> */}

      {/* {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <ShowAlertButton onClick={() => setAlertVisibility(true)} /> */}

      {/* <Counter /> */}

      {/* {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Login {alertMessage}
        </Alert>
      )}
      <Login onClick={onClick} /> */}

      {/* <MidExam tableData={data} /> */}
    </>
  );
};

export default App;
