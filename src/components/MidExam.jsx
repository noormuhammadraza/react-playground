import { useState } from "react";

const ListFilter = ({ tableData }) => {
  const [data, setData] = useState(tableData);

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

  const handleClick = (event) => {
    if (event.target.name === "search") {
      const filteredItems = data.filter(
        (item) =>
          item.name === name ||
          item.age === parseInt(age, 10) ||
          item.city === city ||
          item.occupation === occupation
      );
      setData(filteredItems);
    } else {
      setData(tableData);
      setName(tableData[0].name);
      setAge(tableData[0].age);
      setCity(tableData[0].city);
      setOccupation(tableData[0].occupation);
    }
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
          <select onChange={handleChange} name="city" id="city" value={city}>
            {cityOptions}
          </select>
        </label>
        <label>
          Enter Occupation:
          <select
            onChange={handleChange}
            name="occupation"
            id="occupation"
            value={occupation}
          >
            {occupationOptions}
          </select>
        </label>
        <button
          name="search"
          className="btn btn-primary m-2"
          onClick={handleClick}
        >
          Search
        </button>
        <button
          name="reset"
          className="btn btn-warning m-2"
          onClick={handleClick}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ListFilter;
