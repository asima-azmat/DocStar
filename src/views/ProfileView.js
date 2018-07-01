"use strict";

import React from 'react';

import Profile from '../components/Profile';
import Header from '../components/HeaderNav';

import './../assets/css/medium.css';
import DoctorService from "../services/DoctorService";


export class ProfileView extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentWillMount()
    {
        this.setState({
            loading: true
        });

        let id = this.props.match.params.id;

        DoctorService.getDoctor(id).then((data) => {
            this.setState({
                doctor: data,
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
                <Profile doctor={this.state.doctor}/>
            </div>
        );0
    }
}
