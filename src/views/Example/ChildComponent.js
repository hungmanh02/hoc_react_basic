import React, { Component } from "react";
class ChildComponent extends Component {
  state = {};
  render() {
    console.log("check props: ", this.props);
    // cách  1 gan giá trị của props
    // let name = this.props.name;
    // let age = this.props.age;
    // Cách 2 gan giá trị của props
    // key :value tên biến phải đặt trùng với key của data
    // Destructuring assignment
    let { name, age } = this.props;
    return (
      <>
        <div>
          Child component name: {name} - {age}
        </div>
      </>
    );
  }
}

export default ChildComponent;
