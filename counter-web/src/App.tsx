import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
