import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    follow,
    toggleOpen
} from './../redux/actions/actions'

/** renders bg white when user not follow, render green when followed */
class DoctorSearchSideBar extends Component {
    constructor(props) {
        super(props)
        this.followUser = this.followUser.bind(this)
    }
    followUser () {

    }
    render() {
     return(

       <form>

           Name: <br/>
           <input type="text" name="firstname" value=""/>
           <br/>
           City: <br/>
           <input type="text" name="firstname" value=""/>
           <br/>
           Area: <br/>
           <input type="text" name="firstname" value=""/>
           <br/>
           Speciality: <br/>
           <input type="text" name="firstname" value=""/>
           <br/>
           Language:<br/>
           <input type="text" name="lastname" value=""/>
           <br/>
           Accepted Insurance: <br/>
           <input type="text" name="firstname" value=""/>
           <br/>
           Opening Housrs: <br/>
           <input type="text" name="firstname" value=""/>
           <br/>
           <br/>


       </form>
    );
    }
}
const mapStateToProps = state => {
    return {
        _user: state.authUser.user,
    }
}
export default connect(mapStateToProps, {
    follow,
    toggleOpen
})(DoctorSearchSideBar);