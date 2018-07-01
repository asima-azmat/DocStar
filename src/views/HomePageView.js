"use strict";

import React from 'react';

import HomePage from '../components/HomePage';
import Header from '../components/HeaderNav';

import DoctorService from '../services/DoctorService';

import './../assets/css/medium.css';


export class HomePageView extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
            {
                loading: false,
                fDoctor: []
            };
    }

    componentWillMount()
    {
        this.setState({loading: true});

        DoctorService.getHighestRatedDoctor().then((data) => {
            this.setState({
                fDoctor: data,
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
                <HomePage fDoctor={this.state.fDoctor}/>
            </div>
        );
    }
}
