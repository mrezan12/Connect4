import React, { useEffect, useState } from "react";

const ScoreBoard = () => {
  const [lastWinner, setLastWinner] = useState("No winner yet");
  const [lastLoser, setLastLoser] = useState("No loser yet");
  const [lastGameName, setLastGameName] = useState("No game played yet");

  useEffect(() => {
    // Her render işlemi sırasında localStorage'dan bilgileri çek
    const storedWinner = localStorage.getItem("lastWinner") || "No winner yet";
    const storedLoser = localStorage.getItem("lastLoser") || "No loser yet";
    const storedGameName = localStorage.getItem("lastGameName") || "No game played yet";

    // setState kullanarak state'i güncelle
    setLastWinner(storedWinner);
    setLastLoser(storedLoser);
    setLastGameName(storedGameName);
  }, []); // Boş dependency array, sadece bir kere çalışması için

  return (
    <div>
      <h2>Score Board</h2>
      <p>Last Winner: {lastWinner === "AI" ? "AI" : "Player"}</p>
      <p>Last Loser: {lastWinner === "AI" ? "Player" : "AI"}</p>
      <p>Last Game Name: {lastGameName}</p>
    </div>
  );
};

export default ScoreBoard;
