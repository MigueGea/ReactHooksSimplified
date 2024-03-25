import { Dispatch, SetStateAction } from "react";

interface MinusButtonProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const MinusButton: React.FC<MinusButtonProps> = ({
  count,
  setCount,
}) => {
  const handleValueMinus = () => {
    setCount(count - 1);
  };

  return (
    <button style={{ backgroundColor: "red" }} onClick={handleValueMinus}>
      -
    </button>
  );
};
