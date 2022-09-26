import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increase = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return {
    counter,
    increase,
    decrement,
    reset,
  };
};

function App() {
  const counterA = useCounter(5);
  const counterB = useCounter(10);

  return (
    <div>
      <div>{counterA.counter}</div>
      <button onClick={counterA.increase}>+</button>
      <button onClick={counterA.reset}>Reset</button>
      <div>{counterB.counter}</div>
      <button onClick={counterB.increase}>-</button>
      <button onClick={counterB.reset}>Reset</button>
    </div>
  );
}

export default App;
