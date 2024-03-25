import { Dispatch, SetStateAction } from "react";

interface PlusButtonProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const PlusButton: React.FC<PlusButtonProps> = ({ count, setCount }) => {
  const handleValuePlus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <button style={{ backgroundColor: "green" }} onClick={handleValuePlus}>
      +
    </button>
  );
};
