import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter user name"
        value={userName}
        onChange={(keyPress) => {
          setUserName(keyPress.target.value);
        }}
      />

      <input
        type="password"
        placeholder="Enter your password"
        value={passWord}
        onChange={(keyPress) => {
          setPassword(keyPress.target.value);
        }}
      />
      <h2>{userName}</h2>
      {/* if the alue of show password is true then we display the password, else we do not display the password */}
      <h2>{showPassword ? passWord : "*".repeat(passWord.length)}</h2>
      <button
        onClick={(clickEvent) => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default App;
