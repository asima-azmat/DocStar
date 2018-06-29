import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout, isLoggedIn } from "../utils/AuthService";
import { Switch, Route, Link } from "react-router-dom";
import AuthService from "./AuthService";
import withAuth from "./withAuth";


const Auth = new AuthService();



class Header extends Component {
     handleLogout() {
          this.props.history.replace("/login");

    Auth.logout();
   
  }
  render() {
    return (
      <div>
        <div>
          <div data-behavior="progress-bar" className="progress-bar">
            {" "}
          </div>
          <nav
            data-behavior="animated-navbar"
            className="navbar navbar-default navbar-fixed-top is-inView"
          >
            <div className="container-fluid col-md-10 col-md-offset-1">
              <div className="navbar-header">
                <a className="navbar-brand" id="logo" href="/">
                  <li>
                    {" "}
                    <Link className="nav-link" to="/aboutus">
                      {" "}
                      DocStar{" "}
                    </Link>{" "}
                  </li>
                </a>{" "}
              </div>{" "}
              <ul className="nav navbar-nav filter-links">
                <li>
                  {" "}
                  <Link className="nav-link" to="/aboutus">
                    {" "}
                    About Us{" "}
                  </Link>{" "}
                </li>

                <li>
                  {" "}
                  <Link className="nav-link" to="/doctorfeed">
                    {" "}
                    Find Doctors{" "}
                  </Link>{" "}
                </li>

                <li>
                  {" "}
                  <Link className="nav-link" to="/feed">
                    {" "}
                    Feed{" "}
                  </Link>
                </li>
              </ul>{" "}
        <ul class="nav navbar-nav pull-right">
              


             
              </ul>
            </div>{" "}
          </nav>{" "}
        </div>
      </div>
    );
  }
}

export default Header;