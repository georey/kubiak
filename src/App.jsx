import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TicTacToe from './components/TicTacToe';
import Todo from './components/Todo';
import Home from './components/Home'

function App() {
    return (
        <BrowserRouter>
            <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>kubiak</a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/">Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/todo">Todo List</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/tictactoe">Tic Tac Toe</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="flex-shrink-0 h-100">
                <div className="container themed-container">
                    <Routes>
                        <Route path="/todo" element={<Todo />} />
                        <Route path="/tictactoe" element={<TicTacToe />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;