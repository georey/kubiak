import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, winner, player }) => {
    return (
        <div className="board">
            {squares.map((square, index) => (
                <Square key={index} value={square} onClick={() => onClick(index)} />
            ))}
            <div></div>
            <div></div>
            <div
                className={"ms-auto fs-3 p-2 bd-highlight pull-right " + (
                    winner ? "text-success fw-bolder" : (
                        player == "X" ? "text-primary" : "text-danger")
                )
                }>
                {winner ? "Winner:" + winner : "Player:" + player}
            </div>
        </div>
    )
}

export default Board;