import React, { Component } from "react";
class MyComponent extends Component {
  state = {
    name: "Hùng Mạnh",
    channel: "Học cùng Dân IT",
  };
  handleOnChangName = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  };
  handleClickButton = () => {
    alert("click me! ");
  };
  render() {
    return (
      <>
        <div className="first">
          <input
            type="text"
            value={this.state["name"]}
            onChange={(event) => this.handleOnChangName(event)}
          />
          Hello my component, My name is {this.state.name}
        </div>
        <div className="second">My youtube channel : {this.state.channel}</div>
        <div className="third">
          <button onClick={() => this.handleClickButton()}>Click me!</button>
        </div>
      </>
    );
  }
}

export default MyComponent;
