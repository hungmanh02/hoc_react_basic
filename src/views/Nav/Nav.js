import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink to="/" activeClassName="active" exact={true}>
            Home
          </NavLink>
          <NavLink to="/jobs" activeClassName="active">
            Jobs
          </NavLink>
          <NavLink to="/todo" activeClassName="active">
            Todos
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
      </>
    );
  }
}
export default Nav;
