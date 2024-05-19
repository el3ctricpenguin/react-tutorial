import { useState } from "react";

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        const nextSquares = squares.slice();
        if (nextSquares[i] || calculateWinner(squares)) {
            return;
        }
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }
    function renderSquares(offset) {
        let squaresArray = [];
        for (let i = 0; i < 3; i++) {
            squaresArray.push(
                <Square
                    value={squares[i + offset]}
                    onSquareClick={() => {
                        handleClick(i + offset);
                    }}
                />
            );
        }
        return squaresArray;
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }
    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">{renderSquares(0)}</div>
            <div className="board-row">{renderSquares(3)}</div>
            <div className="board-row">{renderSquares(6)}</div>
        </>
    );
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move == currentMove) {
            return <li key={move}>You are at move #{currentMove}</li>;
        } else if (move > 0) {
            description = `Go to move #${move}`;
        } else {
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] == squares[c]) {
            return squares[a];
        }
    }
    return null;
}
