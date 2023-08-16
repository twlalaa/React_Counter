import "./App.css";

import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
