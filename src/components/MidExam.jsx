import { useState } from "react";

const ListFilter = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 25,
      city: "New York",
      occupation: "Engineer",
    },

    {
      id: 2,
      name: "Jane Smith",
      age: 30,
      city: "San Francisco",
      occupation: "Designer",
    },

    {
      id: 3,
      name: "Bob Johnson",
      age: 28,
      city: "Chicago",
      occupation: "Accountant",
    },

    {
      id: 4,
      name: "Alice Brown",
      age: 35,
      city: "Los Angeles",
      occupation: "Teacher",
    },

    {
      id: 5,
      name: "Charlie Wilson",
      age: 40,
      city: "Houston",
      occupation: "Doctor",
    },

    { id: 6, name: "Eva Davis", age: 22, city: "Miami", occupation: "Artist" },

    {
      id: 7,
      name: "Frank Miller",
      age: 32,
      city: "Seattle",
      occupation: "Software Engineer",
    },

    {
      id: 8,
      name: "Grace Taylor",
      age: 45,
      city: "Boston",
      occupation: "Lawyer",
    },

    {
      id: 9,
      name: "Henry Clark",
      age: 28,
      city: "Denver",
      occupation: "Marketing Manager",
    },

    {
      id: 10,
      name: "Ivy Adams",
      age: 33,
      city: "Atlanta",
      occupation: "Entrepreneur",
    },
  ]);

  const [id, setId] = useState(1);

  const handleChange = (event) => {
    const { name, type, value } = event.target;
    type === "number" && setId(value);
  };

  const handleClick = () => {
    const filteredItems = data.filter((item) => item.id === parseInt(id, 10));
    console.log(filteredItems);
    setData(filteredItems);
  };

  const table = data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.city}</td>
      <td>{item.occupation}</td>
    </tr>
  ));

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>{table}</tbody>
        </table>
      </div>

      <div>
        <input
          type="number"
          name="id"
          min={1}
          max={10}
          value={id}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
};

export default ListFilter;
