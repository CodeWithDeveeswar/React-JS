import { useState } from "react";
import { styled } from "styled-components";

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: blue;
  color: white;
`;

const CounterApp = () => {
  let [count, setCount] = useState(0);
  let [data, setData] = useState("Success");

  let message;
  let remainingClick = 10 - count;

  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
  }

  // Conditional Rendering: if, else-if, else Statement
  if (count < 10) {
    message = (
      <div>
        <h3>You Clicked {count} Times</h3>
        <p>Still {remainingClick} more times to reach a 10% discount</p>
      </div>
    );
  } else if (count === 10) {
    message = (
      <div>
        <h3>You Clicked {count} Times</h3>
        <p>You unlocked a 10% Discount</p>
      </div>
    );
  } else if (count < 20) {
    message = (
      <div>
        <h3>You Clicked {count} Times</h3>
        <p>
          You're on the way to get more rewards! Keep click for 20% discount
        </p>
      </div>
    );
  } else {
    message = (
      <div>
        <h3>You Clicked {count} Times</h3>
        <p>You're reached a top rewards! You are a Click Master</p>
      </div>
    );
  }

  // Conditional Rendering: Switch Statement
  let displayComp = () => {
    switch (data) {
      case "Loading":
        return <LoadingComp />;
        break;
      case "Success":
        return <SuccessComp />;
        break;
      case "Error":
        return <ErrorComp />;
        break;
    }
  };

  return (
    <div>
      <h1>Click to Unlock Rewords 🎉</h1>
      <Button onClick={handleIncrease}>Click Me!</Button>

      {/* Conditional Rendering: Ternary Operator */}
      {/* {count >= 10 ? (
        <p>You unlocked a 10% Discount</p>
      ) : (
        <p>Click 10 times to unlock reward</p>
      )} */}

      {/* Conditional Rendering: Logical AND (&&) */}
      {/* {count >= 20 && <p>You're a Click Master</p>} */}

      {message}

      {displayComp()}
    </div>
  );
};

export default CounterApp;

function LoadingComp() {
  return <h5>Loading....</h5>;
}
function SuccessComp() {
  return <h5>Success ❤</h5>;
}
function ErrorComp() {
  return <h5>Error 😭</h5>;
}
