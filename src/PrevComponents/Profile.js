import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Doctor from './Ryan-Aaron.jpg'
import "./Profile.css";
import { 
    getUserProfile, 
    follow
} from './../redux/actions/actions'
import Tabs from "react-bootstrap/es/Tabs";
import Tab from "react-bootstrap/es/Tab";
import TabContent from "react-bootstrap/es/TabContent";
import Table from "react-bootstrap/es/Table";
import Rater, {Star} from 'react-rater'
import 'react-rater/lib/react-rater.css'
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/es/Button";
import Row from "react-bootstrap/es/Row";


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
                <TabView items = {this.props}/>
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
                <Rater total={5} rating={4} interactive={false}/>
            </div>
            <div className="col-md-2" style={{marginTop: 3 + 'em'}}>
                <img src={Doctor} className="img-responsive" alt="Doctor Profile Picture"/>
            </div>
        </div>
    </div>
}

function TabView () {
    return <div className="container container-fluid">
        <div className="row">
        <div className="col-md-8 col-md-offset-2" style={{marginRight: 2 + 'em'}}>
        <Tabs bsStyle="tabs">
            <Tab eventKey={1} title="Reviews">
                <TabContent>
                    <div className="container" style={{margin:'10px'}}>
                        <div className="row border border-primary">
                            <div className="col-md-6">
                                <h5 id = "ReviewSummary"><b>Excellent Doctor</b></h5>
                                <h5 id = "ReviewDetail">I have visited Dr Aaron and found his services to be very satisfactory.
                                    I have visited Dr Aaron and found his services to be very satisfactory.
                                    I have visited Dr Aaron and found his services to be very satisfactory.
                                    I have visited Dr Aaron and found his services to be very satisfactory.
                                    I have visited Dr Aaron and found his services to be very satisfactory.</h5>
                            </div>
                            <div className="col-md-2">
                                <Rater total={5} rating={4} interactive={false}>
                                    <Star className = "react-rater-star-individual"/>
                                </Rater>
                            </div>
                        </div>
                    </div>
                </TabContent>
            </Tab>
            <Tab eventKey={2} title="Provide Review">
                <TabContent>
                <form>
                <h4>Please provide your reviews about your last appointment with the doctor.</h4>
                    <Rater total={5}>
                        <Star/>
                    </Rater>
                    <FormGroup className = "FormGroupMargin" controlId="formHorizontal">
                        <Row   className="FontStyle" componentClass={ControlLabel}>
                            Summary
                        </Row>
                        <Row>
                            <FormControl type="text" placeholder="Enter brief overview of your visit" />
                        </Row>
                    </FormGroup>
                    <FormGroup className = "FormGroupMargin" controlId="formControlsTextarea">
                        <Row  className="FontStyle" componentClass={ControlLabel}>
                            Details
                        </Row>
                        <Row>
                             <FormControl componentClass="textarea" placeholder="Explain your experience in detail." />
                        </Row>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </form>
                </TabContent>
            </Tab>
            <Tab eventKey={3} title="Request Appointment">
                <TabContent>
                <form>
                <h4>Please enter your details to book an appointment.</h4>
                <FormGroup className="FormGroupMargin" controlId="formHorizontal">
                    <Row  className="FontStyle" componentClass={ControlLabel}>
                        Cause of visit
                    </Row>
                    <Row>
                        <FormControl type="text" placeholder="Enter your cause of visit briefly." />
                    </Row>
                </FormGroup>
                <FormGroup className="FormGroupMargin" controlId="formControlsTextarea">
                    <Row className="FontStyle" componentClass={ControlLabel}>
                        Details
                    </Row>
                    <Row>
                        <FormControl componentClass="textarea" placeholder="Explain in detail why you want to setup an appointment." />
                    </Row>
                </FormGroup>
                {/*<Button className="ButtonWidth btn btn-primary" bsStyle="primary" type="submit">Request Appointment</Button>*/}
                <button className="btn btn-primary" type="submit">Request Appointment</button>

            </form>
        </TabContent>
            </Tab>
            </Tabs>
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