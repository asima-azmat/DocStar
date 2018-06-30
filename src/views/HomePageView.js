"use strict";

import React from 'react';

import Feed from '../components/Feed';
import Header from '../components/HeaderNav';

import FeedService from '../services/FeedService';

import './../assets/css/medium.css';


export class HomePageView extends React.Component
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

    render() {
        if (this.state.loading)
        {
            return (<div></div>);
        }

        return (
            <div>
                <Header/>
                {/*<Feed articles={this.state.data}/>*/}
            </div>
        );
    }
}
