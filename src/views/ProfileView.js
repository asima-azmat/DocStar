"use strict";

import React from 'react';

import Profile from '../components/Profile';
import Header from '../components/HeaderNav';
import {Footer} from '../components/Footer'

import './../assets/css/medium.css';
import DoctorService from "../services/DoctorService";
import UserService from "../services/UserService";


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
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
                doctor: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    addReview(rating,reviewStatement) {
        DoctorService.addReview(rating,reviewStatement).then((data) => {
            window.location.reload();
        }).catch((e) => {
            this.setState(Object.assign({}, this.state, {error: 'Error while adding review'}));
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
                <Profile doctor={this.state.doctor} user={this.state.user} addReview={(rating,reviewStatement) => this.addReview(rating,reviewStatement)}/>
                <Footer/>
            </div>
        );0
    }
}
