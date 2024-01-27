import React, { useState, useEffect } from "react";
import "./App.css";

const ROWS = 6;
const COLUMNS = 7;

const initialBoard = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null));

const ConnectFour = ({ username, cellColor, onGameEnd }) => {
  const [board, setBoard] = useState(initialBoard);
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("red"); // Default starting player

  const boardName = localStorage.getItem("boardName") || "Connect Four";
  const boardBackgroundColor = localStorage.getItem("boardBackgroundColor") || "#ffffff";
  useEffect(() => {
    if (winner) {
      const storedBoardName = localStorage.getItem("boardName") || "Connect Four";
      const winnerName = winner === "red" ? localStorage.getItem("username") :  "AI"  || "player";
  
      // Kazanan ve oyun ismini localStorage'a kaydet
      localStorage.setItem("lastWinner", winnerName);
      localStorage.setItem("lastGameName", storedBoardName);
  
      onGameEnd({
        winner: winnerName,
        gameName: storedBoardName,
      });
    }
  }, [winner, onGameEnd]);


  const dropDisc = (column) => {
    if (winner || board[0][column]) return;

    const newBoard = [...board];
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][column]) {
        newBoard[row][column] = currentPlayer;
        break;
      }
    }

    setBoard(newBoard);
    checkWinner(newBoard);
    switchPlayer();
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
  };

  const checkWinner = (board) => {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLUMNS; col++) {
        if (board[row][col]) {
          if (col <= COLUMNS - 4) {
            if (
              board[row][col] === board[row][col + 1] &&
              board[row][col] === board[row][col + 2] &&
              board[row][col] === board[row][col + 3]
            ) {
              setWinner(currentPlayer);
              return;
            }
          }
          if (row <= ROWS - 4) {
            if (
              board[row][col] === board[row + 1][col] &&
              board[row][col] === board[row + 2][col] &&
              board[row][col] === board[row + 3][col]
            ) {
              setWinner(currentPlayer);
              return;
            }
          }
          if (col <= COLUMNS - 4 && row <= ROWS - 4) {
            if (
              board[row][col] === board[row + 1][col + 1] &&
              board[row][col] === board[row + 2][col + 2] &&
              board[row][col] === board[row + 3][col + 3]
            ) {
              setWinner(currentPlayer);
              return;
            }
          }
          if (col >= 3 && row <= ROWS - 4) {
            if (
              board[row][col] === board[row + 1][col - 1] &&
              board[row][col] === board[row + 2][col - 2] &&
              board[row][col] === board[row + 3][col - 3]
            ) {
              setWinner(currentPlayer);
              return;
            }
          }
        }
      }
    }
  };

  const computerMove = () => {
    const validMoves = [];
    for (let col = 0; col < COLUMNS; col++) {
      if (!board[0][col]) {
        validMoves.push(col);
      }
    }

    if (validMoves.length > 0) {
      const randomColumn = validMoves[Math.floor(Math.random() * validMoves.length)];
      dropDisc(randomColumn);
    }
  };

  useEffect(() => {
    if (currentPlayer === "yellow") {
      const delay = setTimeout(() => {
        computerMove();
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [currentPlayer, board]);

  useEffect(() => {
    if (winner) {
      const storedUsername = localStorage.getItem("username") || "player";
      const storedBoardName = localStorage.getItem("boardName") || "Connect Four";
      
      onGameEnd({
        winner: winner === "red" ? "AI" : storedUsername,
        gameName: storedBoardName,
      });
    }
  }, [winner, onGameEnd]);

  const renderMessage = () => {
    if (winner) {
      return <p>{winner === "red" ? "AI wins!" : `${localStorage.getItem("username")} wins!`}</p>;
    } else {
      return <p>{currentPlayer === "red" ? `player ${localStorage.getItem("username") || "player"}` : "Computer's turn"}</p>;
    }
  };

  return (
    <div className="container">
      <h2>{boardName}</h2>
      {renderMessage()}
      <div className="back" style={{ backgroundColor: boardBackgroundColor }}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="cell"
                onClick={() => currentPlayer === "red" && dropDisc(colIndex)}
                style={{
                  backgroundColor: cell === "red" ? cellColor : cell === "yellow" ? "yellow" : "white",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectFour;
