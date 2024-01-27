import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectFour from "./ConnectFour";
import LoginScreen from "./LoginScreen";
import ScoreBoard from "./ScoreBoard";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [cellColor, setCellColor] = useState("#ff0000"); // Default color: red
  const [showScoreBoard, setShowScoreBoard] = useState(false);

  const handleLogin = ({ username, selectedColor }) => {
    setLoggedIn(true);
    setUsername(username);
    setCellColor(selectedColor);
  };

  const handleGameEnd = (gameResult) => {
    const storedScores = JSON.parse(localStorage.getItem("scoreHistory")) || [];
    const updatedScores = [gameResult, ...storedScores];
    localStorage.setItem("scoreHistory", JSON.stringify(updatedScores));
    setShowScoreBoard(true);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              loggedIn && !showScoreBoard ? (
                <ConnectFour username={username} cellColor={cellColor} onGameEnd={handleGameEnd} />
              ) : loggedIn && showScoreBoard ? (
                <ScoreBoard />
              ) : (
                <LoginScreen onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
