import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handleBackButton = () => {
    this.props.history.push("/user");
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>Hello detail user id: {this.props.match.params.id}</div>
        {isEmptyObj === false && (
          <>
            <div className="user-name">
              User's name:{user.first_name}-{user.last_name}
            </div>
            <div className="user-email">User's email:{user.email}</div>
            <div className="user-img">
              <img src={user.avatar} alt={user.first_name} />
            </div>
            <div>
              <button onClick={() => this.handleBackButton()}>Back</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
