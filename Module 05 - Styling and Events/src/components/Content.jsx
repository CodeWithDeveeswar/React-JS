import styled from "styled-components";

// Styled Component
let Button = styled.button`
  background-color: Blue;
  color: white;
  width: 100px;
  height: 50px;
`;

// Styled Component Inheritance
let NewButton = styled(Button)`
  background-color: red;
  box-shadow: 10px 10px 5px black;
`;

const Content = () => {
  // Internal CSS using JavaScript Object
  let headingStyle = {
    backgroundColor: "red",
    color: "white",
    boxShadow: "10px 10px 5px black",
  };

  // Event Handler Function
  function printSomething(e) {
    console.log(e.target.innerText);
    console.log("Hello");
  }

  // Event Handler Function with Event Object
  function printSomething1(event) {
    console.log(event.target.innerText);
    console.log("Hello");
  }

  return (
    <main>
      {/* Inline CSS */}
      {/* <h1 style={{ backgroundColor: "red", color: "white" }}>Main Content</h1> */}

      {/* Using Internal CSS */}
      <h1 style={headingStyle}>Main Content</h1>

      {/* Passing Event Handler as a Reference */}
      <Button onClick={printSomething}>Click Me!</Button>

      {/* Passing Event Handler using an Arrow Function */}
      <NewButton
        onClick={(e) => {
          printSomething1(e);
        }}
      >
        Duplicate
      </NewButton>
    </main>
  );
};

export default Content;
