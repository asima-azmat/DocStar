import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Doctor from './Ryan-Aaron.jpg'
import { 
    getUserProfile, 
    follow
} from './../redux/actions/actions'
import Tabs from "react-bootstrap/es/Tabs";
import Tab from "react-bootstrap/es/Tab";


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
                <ItemList items ={this.props} />
                <div className="row">
                    <div className="col-md-12 col-md-offset-2" style={{marginRight: 2 + 'em'}}>
                        <Tabs bsStyle="pills">
                            <Tab eventKey={1} title="Reviews">
                                Tab 1 content
                            </Tab>
                            <Tab eventKey={2} title="Provide Review">
                                Tab 2 content
                            </Tab>
                            <Tab eventKey={3} title="Book Appointment">
                                Tab 3 content
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}

function ItemList () {
    return <div className="container container-fluid">
        <div className="row">
            <div className="col-md-6 col-md-offset-2">
                <h2>Doctor's Name</h2>
                <h3>Specialty</h3>
                <h4>Overall Rating</h4>
            </div>
            <div className="col-md-2" style={{marginTop: 3 + 'em'}}>
                <img src={Doctor} className="img-responsive" alt="Doctor Profile Picture"></img>
            </div>
        </div>
    </div>
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