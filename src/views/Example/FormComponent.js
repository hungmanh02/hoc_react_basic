import React, { Component } from "react";
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
          <input type="button" value="Submit" />
        </form>
      </>
    );
  }
}

export default FormComponent;
