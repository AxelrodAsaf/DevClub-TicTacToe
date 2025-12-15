interface SquareProps {
  value: string | null;
  onClickFunction: () => void;
}

export const Square = ({ value, onClickFunction }: SquareProps) => {
  return (
    <button className="square" onClick={onClickFunction}>
      {value}
    </button>
  );
};

export default Square;
