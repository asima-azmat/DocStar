import React, { Component } from 'react';
import AuthService from './AuthService';

class FindDoctors extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
    componentWillMount(){
    }
    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Find c Us page we are  a doctors website :)</h1>
                  
                </div>
            </div>
        );
    }

    handleFormSubmit(e){
        e.preventDefault();
      
        this.Auth.login(this.state.username,this.state.password)
            .then(res =>{
               this.props.history.replace('/');
            })
            .catch(err =>{
                alert(err);
            })
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default FindDoctors;