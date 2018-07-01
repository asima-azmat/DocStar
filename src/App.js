"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, browserHistory} from 'react-router-dom';

import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import { FeedView } from './views/FeedView';
import { SingleBlogView } from './views/SingleBlogView';
import { ProfileView } from './views/ProfileView';
import { BlogEditorView } from './views/BlogEditorView';
import { HomePageView } from './views/HomePageView';

import SearchView  from './views/SearchView';

import UserService from "./services/UserService";


export default class App extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            title: 'DocStar App',
            routes: [
                { component: HomePageView , path: '/', exact: true},
                { component: FeedView , path: '/blog', exact: true},
                { component: SearchView, path: '/search', exact: true},
                { component: ProfileView , path: '/doctor/:id', exact: true},
                { render: (props) => {
                    if(UserService.isAuthenticated()) {
                        if (UserService.getCurrentUser().isDoctor) {
                            return (<BlogEditorView {...props} />)
                        }
                        else
                        {
                            return (<Redirect to={'/'}/>)
                        }
                    }
                    else {
                        return (<Redirect to={'/login'}/>)
                    }}, path: '/blog/create', exact: true},
                { component: SingleBlogView , path: '/blog/:id', exact:true},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            if (UserService.getCurrentUser().isDoctor) {
                                return (<BlogEditorView {...props} />)
                            }
                            else
                            {
                                return (<Redirect to={'/'}/>)
                            }
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/blog/:id/edit', exact: true},
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
