"use strict";

import React from 'react';

import Editor from './../components/Editor';
import Header from '../components/HeaderNav';

import FeedService from '../services/FeedService';
import UserService from '../services/UserService';


export class BlogEditorView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        if(this.props.history.location.pathname === '/blog/create') {
            this.setState({
                loading: true,
                blog: undefined,
                error: undefined,
                newFlag: true
            });
        }
        else if(this.props.location.state != undefined) {
            this.setState({
                loading: true,
                blog: this.props.location.state,
                error: undefined,
                newFlag: false
            });
        }
        else {
            this.setState({
                loading: true,
                error: undefined,
                newFlag: false
            });

            let id = this.props.match.params.id;

            FeedService.getBlog(id).then((data) => {
                this.setState({
                    blog: data,
                    error: undefined
                });
            }).catch((e) => {
                console.error(e);
            });
        }

        UserService.getCurrentUserDetails().then((data) => {
            this.setState({
                user: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    updateBlog(blog) {
        if(this.state.blog === undefined) {
            FeedService.createBlog(blog).then((data) => {
                this.props.history.push('/');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating blog'}));
            });
        } else {
            FeedService.updateBlog(this.state.blog._id,blog).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while updating blog'}));
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (<div>asdasdas</div>);
        }

        return (
            <div>
                <Header/>
                <Editor blog={this.state.blog} isNew={this.state.newFlag} user={this.state.user} onSubmit={(blog) => this.updateBlog(blog)} error={this.state.error} />
            </div>
        );
    }
}
