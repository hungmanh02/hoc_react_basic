import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
class FormComponent extends Component {
  state = {
    firstName: "",
    lastName: "",
  };
  handleOnChangFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnChangLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(">>> check data state", this.state);
  };
  render() {
    return (
      <>
        <h2>HTML Forms</h2>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnChangFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnChangLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <ChildComponent name="Hungmanh" age="26" />
      </>
    );
  }
}

export default FormComponent;
