"use strict";

import React from 'react';

import ArticleView from '../components/ArticleView';
import Header from '../components/HeaderNav';

import FeedService from '../services/FeedService';

import './../assets/css/medium.css';
import UserService from "../services/UserService";


export class SingleBlogView extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            loading: false,
            blog: []
        };
    }

    componentWillMount()
    {
        this.setState({
            loading: true,
            error: undefined
        });

        let id = this.props.match.params.id;

        FeedService.getBlog(id).then((data) => {
            this.setState({
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
                blog: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    deleteBlog(id) {
        FeedService.deleteBlog(id).then((message) => {
            this.props.history.push('/blog');
        }).catch((e) => {
            console.log(e);
        });
    }

    addComment(comment){
        console.log(comment);
        FeedService.addComment(comment).then((data) => {
                window.location.reload(true);
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while adding comment'}));
            });
    }

    render() {
        if (this.state.loading) 
        {
            return (<div></div>);
        }

        return (
            <div>
                <Header/>
                <ArticleView _article={this.state.blog} user={this.state.user} onDelete={(id) => this.deleteBlog(id)}
                insertComment={(comment) => this.addComment(comment)} error={this.state.error}/>
            </div>
        );
    }
}
