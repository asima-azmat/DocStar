import React, { Component } from 'react';
import logo from './logo.svg';
import './NavigationBar.css';


class NavigationBar extends Component {
    render() {
        return (
            <ul>
                <li><a href="default.asp">About Us</a></li>
                <li><a href="news.asp">Find Doctors</a></li>
                <li><a href="contact.asp">Book Appointment</a></li>
                <li><a href="about.asp">Rate Doctors</a></li>
                <li><a href="default.asp">Our Blog</a></li>
                <li><a href="news.asp">Login</a></li>
                <li><a href="contact.asp">Contact Us</a></li>

            </ul>
        );
    }
}
export default NavigationBar;