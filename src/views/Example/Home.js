import logo from "../logo.svg";
import React from "react";
// import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
class Home extends React.Component {
  componentDidMount() {
    //   setTimeout(() => {
    //     this.props.history.push("/jobs");
    //   }, 3000);
  }
  render() {
    console.log(">>>check props", this.props);
    return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello Home </div>
      </>
    );
  }
}
// export default withRouter(Home);
export default Color(Home);
