
import React, { useState, useEffect } from "react";
import ConnectFour from "./ConnectFour";
import { Link } from "react-router-dom";
import ScoreBoard from "./ScoreBoard";

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [boardName, setBoardName] = useState("");
  const [selectedColor, setSelectedColor] = useState(() => {
    const storedColor = localStorage.getItem("selectedColor");
    return storedColor || "#ff0000";
  });

  const [boardBackgroundColor, setBoardBackgroundColor] = useState(() => {
    const storedBoardBackgroundColor = localStorage.getItem("boardBackgroundColor");
    return storedBoardBackgroundColor || "#ffffff"; // Set a default color if not present
  });

  useEffect(() => {
    const storedColor = localStorage.getItem("selectedColor");
    const storedBoardBackgroundColor = localStorage.getItem("boardBackgroundColor");

    if (storedColor && ["red", "yellow"].includes(storedColor.toLowerCase())) {
      setSelectedColor(storedColor.toLowerCase());
    } else {
      setSelectedColor("red");
    }

    if (storedBoardBackgroundColor) {
      setBoardBackgroundColor(storedBoardBackgroundColor);
    } else {
      setBoardBackgroundColor("#ffffff");
    }
  }, []);

  const handleLogin = () => {
    if (username.trim() !== "") {
      localStorage.setItem("selectedColor", selectedColor);
      localStorage.setItem("username", username);
      localStorage.setItem("boardName", boardName);
      localStorage.setItem("boardBackgroundColor", boardBackgroundColor);
      onLogin({ username, selectedColor, boardName, boardBackgroundColor });
    } else {
      alert("Please enter a valid username.");
    }
  };

  return (
    <div className="login-screen">
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Board Name:
          <input
            type="text"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
          />
        </label>
        <label>
          Choose Cell Color:
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
        </label>
        <label>
          Choose Board Background Color:
          <input
            type="color"
            value={boardBackgroundColor}
            onChange={(e) => setBoardBackgroundColor(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
        <Link to="/ScoreBoard">skor</Link>
      </form>
    </div>
  );
};

export default LoginScreen;