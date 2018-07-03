"use strict";

import React from 'react';

import Profile from '../components/Profile';
import Header from '../components/HeaderNav';
import {Footer} from '../components/Footer'

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

        DoctorService.addReview(id).then((data)=>{
            this.setState({
                reviewData: data,
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
                <Profile doctor={this.state.doctor}/>
                <Footer/>
            </div>
        );0
    }
}
