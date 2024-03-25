import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    console.log("text changed");
  }, [text]);

  return (
    <>
      <div>
        <p>Select your name</p>
        <button onClick={() => setText("Migue")}>Migue</button>
        <button onClick={() => setText("Alberto")}>Alberto</button>
        <button onClick={() => setText("Claudia")}>Claudia</button>
        {text && <p>Your name is {text}</p>}
      </div>
    </>
  );
}

export default App;
