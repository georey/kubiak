import react from "react";
import React, { useState } from "react";
import { calculateWinner } from "../assets/helpers/winner";
import Board from "./Board";
const TicTacToe = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const [xTurn, setXTurn] = useState(true);
  const winner = calculateWinner(history[step]);
  const player = xTurn ? "X" : "O";

  const handleClick = (index) => {
    const historyPoint = history.slice(0, step + 1);
    const current = historyPoint[step];
    const squares = [...current];

    //if there are a winner or square is selected do nothing
    if (winner || squares[index]) return;

    squares[index] = player;
    setHistory([...historyPoint, squares]);
    setStep(historyPoint.length);
    setXTurn(!xTurn);
  }
  return (
    <react.Fragment>
      <h1 className="p-3">
        Tic Tac Toe
      </h1>
      <Board squares={history[step]} onClick={handleClick} />
      <h3>{winner ? "Winner:" + winner : "Player:" + player}</h3>
    </react.Fragment>
  )
}

export default TicTacToe