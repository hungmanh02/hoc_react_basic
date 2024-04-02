import React, { Component } from "react";
import FormComponent from "./FormComponent";
import ChildComponent from "./ChildComponent";
class MyComponent extends Component {
  state = {
    arrJobs: [
      {
        id: "abcJob1",
        title: "Developers",
        salary: "500",
      },
      {
        id: "abcJob2",
        title: "Testers",
        salary: "400",
      },
      {
        id: "abcJob3",
        title: "Project managers",
        salary: "300",
      },
    ],
  };
  addNewJobs = (job) => {
    // let currenJobs = this.state.arrJobs;
    // currenJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currenJobs,
    });
  };
  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  render() {
    return (
      <>
        <FormComponent addNewJobs={this.addNewJobs} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
