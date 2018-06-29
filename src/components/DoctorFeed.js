import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadDoctors
} from './../redux/actions/actions'
import DoctorSearchSideBar from './DoctorSearchSideBar'

import AsideFeed from './AsideFeed'

const mapStateToProps = state => {
    return {
        doctors: state.doctors.doctors
    }
}

class DoctorFeed extends Component {

    componentWillReceiveProps(nextProps) {
        
    }
        
    componentWillMount() {
        this.props.loadDoctors()
    }
    
    render() {
    const doctors = this.props.doctors.reverse().map((doctor)=>
                

                <div className="post-panel">
                    <div className="main-body">
                        <h3 className="post-title"><a href={`/doctorview/${doctor._id}`} >{doctor.firstName} {doctor.lastName}</a></h3>
                        <div className="post-body">
                            <p>{doctor.address}</p>
                            <p>{doctor.doctorParams.qualification}</p>
                            <p>{doctor.doctorParams.experience}</p>
                            <p className="" dangerouslySetInnerHTML={{__html: doctor.phoneNo}}></p>
                        </div>
                        <a className="read-more" href={`/doctorview/${doctor._id}`}>Read more</a>
                    </div>

                    <div className="post-stats clearfix">
                        <div className="pull-left">
                            <div className="like-button-wrapper">
                                <form className="button_to" method="get" action="">
                                    <button className="like-button" data-behavior="trigger-overlay" type="submit"><i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button></form>
                                <span className="like-count">{doctor.claps}</span>
                            </div>

                        </div>

                        <div className="pull-right">
                            <div className="bookmark-button-wrapper">
                                <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button></form>
                            </div>

                        </div>

                        <div className="response-count pull-right">
                        </div>
                    </div>
                </div>
            )

        return ( 
            <div>
                <div className="container-fluid main-container">
                    <div className="col-md-6 col-md-offset-1 dashboard-main-content">
                        <div className="posts-wrapper animated fadeInUp" data-behavior="endless-scroll" data-animation="fadeInUp-fadeOutDown">

                            {doctors}
                        </div>
                    </div>
                    {//this.props.doctors ? <AsideFeed _doctors={this.props.doctors} /> : ''}
                    }<DoctorSearchSideBar/>
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, { loadDoctors })(DoctorFeed);