import Square from "./Square";

interface BoardProps {
  squares: (string | null)[];
  onSquareClick: (index: number) => void;
}

export default function Board({ squares, onSquareClick }: BoardProps) {
  return (
    <div className="board">
      {squares.map((sqr, index) => (
        <Square value={sqr} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
}
