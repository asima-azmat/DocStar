"use strict";

import React from 'react';

import Feed from '../components/Feed';
import Header from '../components/HeaderNav';

import FeedService from '../services/FeedService';

import './../assets/css/medium.css';


export class FeedView extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = 
        {
            loading: false,
            data: []
        };
    }

    componentWillMount()
    {
        this.setState({loading: true});

        FeedService.getBlogs().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    deleteMovie(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        FeedService.deleteMovie(id).then((message) => {

            let movieIndex = this.state.data.map(movie => movie['_id']).indexOf(id);
            let movies = this.state.data;
            movies.splice(movieIndex, 1);
            this.setState({
               data: [...movies],
               loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        if (this.state.loading) 
        {
            return (<h2>Loading...</h2>);
        }

        return (
            <div>
                <Header/>
                <Feed articles={this.state.data}/>
            </div>
        );
    }
}
