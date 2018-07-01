import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import KebabMenu from './KebabMenu';
import { Navbar, Nav, NavItem} from "react-bootstrap";
import { Button } from 'react-md';
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
                    <Button flat style={{top: 10+'px'}} onClick={() => this.props.history.push('/search')}>Search</Button>
                    <Button flat style={{top: 10+'px'}} onClick={() => this.props.history.push('/blog')}>Blogs</Button>
                    {this.state.user ?
                        [<Navbar.Text>Welcome {this.state.user.username.substr(0, this.state.user.username.indexOf('@'))}</Navbar.Text>] :
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

export default withRouter(Header);