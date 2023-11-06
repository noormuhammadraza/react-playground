import Counter from "./components/Counter";
import ListGroup from "./components/ListGroup";
import MidExam from "./components/MidExam";
import Alert from "./components/Alert";
import ShowAlertButton from "./components/ShowAlertButton";
import { useState } from "react";
import Login from "./components/Login";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";

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

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Product 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        quantity: 1,
      },
    ],
  });

  // const handleClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Mrnoobhere" } });

  //   setPizza({
  //     ...pizza,
  //     toppings: [...pizza.toppings, "Cheese"],
  //   });

  //   setCart({
  //     ...cart,
  //     items: cart.items.map((item) =>
  //       item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
  //     ),
  //   });
  // };

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
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt id
        illo quas nihil suscipit voluptas aperiam fugiat, officiis vel nisi eum
        cupiditate maxime tempore incidunt ipsam voluptatibus, temporibus iure
        repellendus impedit, modi quia? Soluta beatae deserunt id ad, totam
        quasi natus incidunt molestias quaerat quos illo cupiditate fugit
        obcaecati omnis aut optio quisquam culpa nesciunt. Consequatur nesciunt
        nihil explicabo molestias repellat ipsam voluptatibus libero molestiae
        corporis, ipsum sequi odio totam doloribus distinctio quo ratione!
        Excepturi laboriosam dolores nisi! Eaque, placeat dolore at possimus
        voluptates, sed earum ipsam beatae id eius exercitationem unde sint ab
        cum hic officiis expedita atque?
      </ExpandableText>

      {/* <h1>{game.player.name}</h1> */}

      {/* <ul>
        {pizza.toppings.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}

      {/* <h1>ID = {cart.items[0].id}</h1>
      <h1>Title = {cart.items[0].title}</h1>
      <h1>Quantity = {cart.items[0].quantity}</h1>

      <button onClick={handleClick}>
        Click here to increase the quantity by 1
      </button> */}

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
