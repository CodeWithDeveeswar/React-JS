import { useState } from "react";

const CounterApp = () => {
  //   let count = 0;

  let [count, setCount] = useState(0);

  function returnState() {
    return 100;
  }

  let [sample, setSample] = useState(() => {
    return returnState();
  });

  //   console.log(useState(0));

  function handleIncrease() {
    // count += 1;
    // console.log(count);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrease() {
    // count -= 1;
    // console.log(count);
    setCount((prevCount) => {
      return prevCount - 1;
    });
    setCount((prevCount) => {
      return prevCount - 1;
    });
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }

  return (
    <div>
      <h1>
        Counter Application - {count} - {sample}
      </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default CounterApp;
