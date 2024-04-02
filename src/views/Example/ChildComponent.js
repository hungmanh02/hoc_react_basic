import React, { Component } from "react";
class ChildComponent extends Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  render() {
    // console.log("check props: ", this.props);
    // cách  1 gan giá trị của props
    // let name = this.props.name;
    // let age = this.props.age;
    // Cách 2 gan giá trị của props
    // key :value tên biến phải đặt trùng với key của data
    // Destructuring assignment
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    // let check = showJobs === true ? "showJobs=true" : "showJobs=false";
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            {arrJobs.map((item, index) => (
              <div key={index}>
                {item["id"]} - {item.title} - {item.salary}
              </div>
            ))}
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
