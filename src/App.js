import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  return (
    <div>
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
          setUserName(keyPress.target.value);
        }}
      />
      <p>{userName}</p>
    </div>
  );
};

export default App;
