import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import KebabMenu from './KebabMenu';
import { Toolbar } from 'react-md';

class Header extends Component 
{
  constructor(props) {
        super(props);
    }

  render() {
    return (
      <div>
        <div>
          <div data-behavior="progress-bar" className="progress-bar">
            {" "}
          </div>
          <nav data-behavior="animated-navbar" className="navbar navbar-default navbar-fixed-top is-inView">
            <div className="container-fluid col-md-10 col-md-offset-1">
                <Toolbar className="navbar-header" title="DocStar" actions={<KebabMenu id="toolbar-transparent-kebab-menu" />}/>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;