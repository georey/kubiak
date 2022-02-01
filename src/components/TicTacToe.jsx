import react from "react";
import React, { useState } from "react";
import { calculateWinner } from "../assets/helpers/winner";
import xWin from "../assets/images/x-win.gif";
import oWin from "../assets/images/o-win.gif";
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

  const restart = () => {
    setHistory([Array(9).fill(null)]);
    setStep(0);
    setXTurn(true);
  }

  return (
    <react.Fragment>
      <h1 className="p-3">
        Tic Tac Toe
      </h1>
      <button type="button" className="btn btn-dark" onClick={restart}>Restart Game</button>
      <Board squares={history[step]} onClick={handleClick} winner={winner} player={player} />
      {winner ? <img src={player == "O" ? xWin : oWin} /> : ""}
    </react.Fragment>
  )
}

export default TicTacToe