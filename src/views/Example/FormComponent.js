import React, { Component } from "react";
class FormComponent extends Component {
  state = {
    title: "",
    salary: "",
  };
  handleOnChangtitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnChangsalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
      return;
    }
    console.log(">>> check data state", this.state);
    this.props.addNewJobs({
      id: "abcJob" + Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <h2>HTML Forms</h2>
        <form>
          <label htmlFor="fname">Jobs title:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnChangtitle(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleOnChangsalary(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default FormComponent;
