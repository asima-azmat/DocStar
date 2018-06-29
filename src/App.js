"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, browserHistory} from 'react-router-dom';

import { MovieListView } from './views/MovieListView';
import { MovieDetailView }   from './views/MovieDetailView';
import { MovieFormView }   from './views/MovieFormView';
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import { FeedView } from './views/FeedView';
import { SingleBlogView } from './views/SingleBlogView';

import UserService from "./services/UserService";


export default class App extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            title: 'DocStar App',
            routes: [
                { component: FeedView , path: '/', exact: true},
                { component: SingleBlogView , path: '/blog/:id', exact: true},
                { component: MovieDetailView , path: '/show/:id'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<MovieFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/edit/:id'},
                { render: (props) => {
                    if(UserService.isAuthenticated()) {
                        return (<MovieFormView {... props} />)
                    }
                    else {
                        return (<Redirect to={'/login'}/>)
                    }}, path: '/add',},
                { component: UserLoginView, path: '/login'},
                { component: UserSignupView, path: '/register'}
            ]
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() 
    {
        return(
            <div>
                <Router history={browserHistory}>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

