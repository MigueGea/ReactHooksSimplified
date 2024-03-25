import { useState } from "react";
import "./App.css";
import { MinusButton } from "./components/MinusButton";
import { PlusButton } from "./components/PlusButton";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <MinusButton count={count} setCount={setCount}></MinusButton>
        <p>{count}</p>
        <PlusButton count={count} setCount={setCount}></PlusButton>
      </div>
    </>
  );
}

export default App;
