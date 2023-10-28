import { useState } from "react";
import "./Login.css";
import Alert from "../Alert";

const Login = ({ onClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { type, value } = event.target;
    type === "text" ? setUsername(value) : setPassword(value);
  };

  const handleClick = () => {
    if (username === "Mrnoobhere" && password === "enigma") {
        onClick();
    }
    else {
        console.log("Incorrect Username or Password")
    }
  }

  

  return (
    <div className="main">
      <h1>Welcome to Metaverse</h1>
      <label>
        Username
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <p>
        <a href="#">Forgot Password?</a>
      </p>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
