import React, { Component } from "react";
import { Link } from "react-router-dom";
import KebabMenu from './KebabMenu';
import { Navbar, Nav, NavItem} from "react-bootstrap";
import UserService from "../services/UserService";

class Header extends Component 
{
  constructor(props) {
        super(props);
        this.state = {
          user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
      }
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
                    {this.state.user ?
                        [<Navbar.Text>Signed in as: {this.state.user.username.substr(0, this.state.user.username.indexOf('@'))}</Navbar.Text>] :
                        [<Navbar.Text>You're not Signed In</Navbar.Text>]
                    }
                    <KebabMenu id="toolbar-transparent-kebab-menu" />
                </Nav>
            </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;