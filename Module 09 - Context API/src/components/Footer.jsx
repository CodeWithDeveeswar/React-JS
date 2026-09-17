import React from "react";
import { UserContext } from "../App";

class Footer extends React.Component {
  render() {
    let date = new Date();

    return (
      <footer>
        <h2>Footer</h2>
        <UserContext.Consumer>
          {({ user }) => {
            return (
              <h2>
                {user.uName} - {date.getFullYear()}
              </h2>
            );
          }}
        </UserContext.Consumer>
      </footer>
    );
  }
}

export default Footer;
