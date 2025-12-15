import { useState, useEffect } from "react";
import Board from "./Board";

export default function Game() {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );

  const timeLimit = 10;

  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [time, setTime] = useState(timeLimit);
  const [timeRunning, setTimeRunning] = useState(false);

  useEffect(() => {
    if (!timeRunning || winner) return;

    const timerId = window.setInterval(() => {
      setTime((currTime) => Math.max(currTime - 1, 0));
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [timeRunning, winner]);

  useEffect(() => {
    if (!timeRunning || winner) return;

    if (time === 0) {
      setIsXNext((currPlayer) => !currPlayer);
      setTime(timeLimit);
    }
  }, [time, timeRunning, winner, timeLimit]);

  function handleGameRestart() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setTime(timeLimit);
    setTimeRunning(false);
  }

  function handleSquareClick(index: number) {
    if (squares[index] !== null || winner) return;

    if (!timeRunning) setTimeRunning(true);

    const nextSquares = [...squares];
    nextSquares[index] = isXNext ? "X" : "O";
    setSquares(nextSquares);

    const winningPlayer = calculateWinner(nextSquares);
    if (winningPlayer) return;

    setIsXNext((p) => !p);
    setTime(timeLimit);
  }

  function calculateWinner(boardArr: (string | null)[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ] as const;

    for (const [a, b, c] of lines) {
      if (
        boardArr[a] &&
        boardArr[a] === boardArr[b] &&
        boardArr[a] === boardArr[c]
      ) {
        setWinner(boardArr[a]);
        setTimeRunning(false);
        return boardArr[a];
      }
    }
    return null;
  }

  return (
    <div className="game-container">
      <h1>Asaf's Basic React Tic Tac Toe</h1>

      <p>Play timer: {time}</p>

      <Board squares={squares} onSquareClick={handleSquareClick} />
      <p>{winner == null ? null : "Winner: " + winner}</p>

      <p>
        {winner == null
          ? isXNext
            ? "Next Player: X"
            : "Next Player: O"
          : null}
      </p>

      <button onClick={handleGameRestart}>Restart</button>
    </div>
  );
}
