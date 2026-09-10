import styled from "styled-components";
import CounterApp from "./CounterApp";

let Button = styled.button`
  background-color: Blue;
  color: white;
  width: 100px;
  height: 50px;
`;

let NewButton = styled(Button)`
  background-color: red;
  box-shadow: 10px 10px 5px black;
`;

const Content = () => {
  let headingStyle = {
    backgroundColor: "red",
    color: "white",
    boxShadow: "10px 10px 5px black",
  };

  let user = "Devesh";

  function printSomething(e) {
    // console.log(e.target.innerText);
    // console.log("Hello");
    user = "Akilan";
    console.log(user);
  }

  function printSomething1(event) {
    // console.log(event.target.innerText);
    // console.log("Hello");
    user = "Kandhan";
    console.log(user);
  }

  return (
    <main>
      <h1 style={headingStyle}>Main Content - {user}</h1>

      <Button onClick={printSomething}>Click Me!</Button>

      <NewButton
        onClick={(e) => {
          printSomething1(e);
        }}
      >
        Duplicate
      </NewButton>

      <CounterApp />
    </main>
  );
};

export default Content;
