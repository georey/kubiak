import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TicTacToe from './components/TicTacToe';
import Todo from './components/Todo';
import Home from './components/Home'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Link to="/">Home</Link>
                <Link to="/todo">TODO</Link>
                <Link to="/tictactoe">Tic Tac Toe</Link>

                <Routes>
                    <Route path="/todo" element={<Todo/>} />
                    <Route path="/tictactoe" element={<TicTacToe />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;