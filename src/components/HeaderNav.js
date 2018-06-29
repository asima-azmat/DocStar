import React, { Component } from "react";
import { Link } from "react-router-dom";
import KebabMenu from './KebabMenu';
import { Navbar, Nav, NavItem} from "react-bootstrap";

class Header extends Component 
{
  constructor(props) {
        super(props);
    }

  render() {
    return (
      <div>
        <div>
            <Navbar fixedTop={true}>
                <Navbar.Header>
                    <Navbar.Brand><Link to={'/'}>DocStar</Link></Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <Navbar.Text>Signed in as:</Navbar.Text>
                    <KebabMenu id="toolbar-transparent-kebab-menu" />
                </Nav>
            </Navbar>
{/*          <div data-behavior="progress-bar" className="progress-bar">
            {" "}
          </div>
          <nav data-behavior="animated-navbar" className="navbar navbar-default navbar-fixed-top is-inView">
            <div className="container-fluid col-md-10 col-md-offset-1">
                <div className="navbar-header">
                    <KebabMenu id="toolbar-transparent-kebab-menu" />
                </div>
            </div>
          </nav>*/}
        </div>
      </div>
    );
  }
}

export default Header;