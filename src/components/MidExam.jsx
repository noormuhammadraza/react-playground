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
  const [id, setId] = useState(data[0].id);
  const [name, setName] = useState(data[0].name);
  const [age, setAge] = useState(data[0].age);
  const [city, setCity] = useState(data[0].city);
  const [occupation, setOccupation] = useState(data[0].occupation);

  const cities = data.map((item) => item.city);
  const cityOptions = cities.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const occupations = data.map((item) => item.occupation);
  const occupationOptions = occupations.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const table = data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.city}</td>
      <td>{item.occupation}</td>
    </tr>
  ));

  const handleChange = (event) => {
    const { name, type, value } = event.target;
    if (name === "id") {
      setId(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "age") {
      setAge(value);
    } else if (name === "city") {
      setCity(value);
    } else {
      setOccupation(value);
    }
  };

  const handleClick = () => {
    const filteredItems = data.filter(
      (item) =>
        // item.id === parseInt(id, 10) ||
        item.name === name ||
        item.age === parseInt(age, 10) ||
        item.city === city ||
        item.occupation === occupation
    );
    setData(filteredItems);
  };

  const errorCheck = () => {
    console.log(cityOptions);
    console.log(occupationOptions);
  };

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

      <div className="mt-3">
        {/* <label>
          Enter ID:
          <input
            type="number"
            name="id"
            min={1}
            max={10}
            value={id}
            onChange={handleChange}
          />
        </label> */}
        <label>
          Enter Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Enter Age:
          <input type="number" name="age" value={age} onChange={handleChange} />
        </label>
        <label>
          Enter City:
          {/* <input type="text" name="city" value={city} onChange={handleChange} /> */}
          <select onChange={handleChange} name="city" id="city" value={city}>
            {cityOptions}
          </select>
        </label>
        <label>
          Enter Occupation:
          {/* <input
            type="text"
            name="occupation"
            value={occupation}
            onChange={handleChange}
          /> */}
          <select
            onChange={handleChange}
            name="occupation"
            id="occupation"
            value={occupation}
          >
            {occupationOptions}
          </select>
        </label>
        <button className="btn btn-primary m-2" onClick={handleClick}>
          Search
        </button>
      </div>
    </>
  );
};

export default ListFilter;
