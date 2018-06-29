"use strict";

import React from 'react';

import Profile from '../components/Profile';
import Header from '../components/HeaderNav';

import './../assets/css/medium.css';


export class ProfileView extends React.Component
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
        this.setState({loading: false});
    }

    render() {
        if (this.state.loading)
        {
            return (<h2>Loading...</h2>);
        }

        return (
            <div>
                <Header/>
                <Profile/>
            </div>
        );
    }
}
