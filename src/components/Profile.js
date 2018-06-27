import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Doctor from './Ryan-Aaron.jpg'

import FollowButton from './FollowButton'
import { 
    getUserProfile, 
    follow
} from './../redux/actions/actions'

class Profile extends Component {

    componentDidMount() {
        document.body.className = 'users show'
    }
    componentWillUnmount() {
        document.body.className = ''
    }
    componentWillMount() {
        this.props.getUserProfile(this.props.match.params.id)
    }

    render() {

        return ( 
            <div>
            {/*{Object.keys(this.props.profile).length > 0 ? <ItemList items ={this.props} /> : ''}*/
                <ItemList items ={this.props} />
            }
            </div>
        );
    }
}

function ItemList ({items}) {
    return (
        <div className="container container-fluid">
            <div className="row">
                <div className="col-md-6 col-md-offset-2">
                    <h2>Doctor's Name</h2>
                    <h3>Specialty</h3>
                    <h4>Overall Rating</h4>
                </div>
                <div className="col-md-2" style={{marginTop: 3 + 'em'}} >
                    <img src={Doctor} className="img-responsive" alt="Doctor Profile Picture"></img>
                </div>
            </div>
            <div className="row" >
                <div className="col-md-8 col-md-offset-2" >
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#rating">Ratings</a></li>
                        <li><a data-toggle="tab" href="#provide_rating">Provide Rating</a></li>
                        <li><a data-toggle="tab" href="#book_appointment">Book Appointment</a></li>
                    </ul>

                    <div className="tab-content">
                        <div id="rating" className="tab-pane fade in active">
                            <h3>Ratings</h3>
                            <p>Some content.</p>
                        </div>
                        <div id="provide_rating" className="tab-pane fade">
                            <h3>Provide Ratings</h3>
                            <p>Some content in menu 1.</p>
                        </div>
                        <div id="book_appointment" className="tab-pane fade">
                            <h3>Book Appointment</h3>
                            <p>Some content in menu 2.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}
Profile.propTypes = {
    params: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        _article: state.articles.article,
        user: state.authUser.user,
        profile: state.authUser.profile
    }
}
export default connect(mapStateToProps, {
    getUserProfile,
    follow
})(Profile);