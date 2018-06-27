import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Feed from './components/Feed'
import Profile from './components/Profile'
import ArticleView from './components/ArticleView'
import Editor from './components/Editor'
import SignInWith from './components/SignInWith'

import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();



//import  from './components'

class App extends Component {


  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }
    render() {
        const pathname = window.location.pathname
        return ( 
            <div>
            { !pathname.includes('editor') ? <Header /> : '' }
                <Switch>
                    <Route exact path="/" component={Feed} />
                    <Route exact path="/login" component={Login} />
                    <Route path="/profile/:id" component={Profile} />
                    <Route path="/articleview/:id" component={ArticleView} />
                    <Route path="**" component={Feed} />
                </Switch>
            </div>
        );
    }
}

export default App;