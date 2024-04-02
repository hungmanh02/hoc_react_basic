import logo from "../logo.svg";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello Home </div>
      </>
    );
  }
}
export default Home;
