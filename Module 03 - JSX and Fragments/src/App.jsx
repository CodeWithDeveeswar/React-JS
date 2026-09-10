import "./App.css";
import { Fragment } from "react";

// function user() {
//   return ("Deveeswar", 24, true);
// }

// console.log(user());

let author = "Deveeswar";

let isLogged = true;

function App() {
  return (
    <Fragment key={1}>
      <h1 style={{ backgroundColor: "yellow", color: "red" }}>React JSX</h1>
      <div className="container">
        <h1>JSX - JavaScript XML</h1>
        <label htmlFor="user">User Name: </label>
        <input id="user" type="text" />
        <p>{author}</p>
        {/* <button onClick={newFun}></button> */}
        {isLogged && <p>Welcome to Our Website</p>}
      </div>
    </Fragment>
  );
}

export default App;
