import React, { Component } from 'react';
import Review from './Review';
import Tabs from "react-bootstrap/es/Tabs";
import Tab from "react-bootstrap/es/Tab";
import TabContent from "react-bootstrap/es/TabContent";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import AddReview from './AddReview';
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";
import Row from "react-bootstrap/es/Row";
import { withRouter} from 'react-router-dom';
import './../assets/css/Profile.css';
import Button from "react-bootstrap/es/Button";

class Profile extends Component {

    componentDidMount() {
        document.body.className = 'users show'
    }
    componentWillUnmount() {
        document.body.className = ''
    }
    componentWillMount() {
        //this.props.getUserProfile(this.props.match.params.id)
    }

    static giveDoctorName(doctor)
    {
        return doctor.firstName + ' ' + doctor.lastName;
    }

    static getLanguage(doctor){
        const languages = doctor.languages;
        const lang = languages.map((language) => language + ', ');
        return lang;
    }

    static getOpeningHours(doctor){
        const openingHours = doctor.doctorParams.openingHours;
        const hrs = openingHours.map((openingHour) => openingHour + ', ');
        return hrs;
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <ItemList doctor = {this.props.doctor} />
                {this.props.doctor.isDoctor ? [
                <TabView user = {this.props.user} docId={this.props.doctor._id}/> ]:[<div></div>]}
            </div>
        );
    }
}

function ItemList (props) {
    return <div className="container container-fluid">
        <div className="row">
            <div className="col-md-6 col-md-offset-2">
                <h1>{Profile.giveDoctorName(props.doctor)}</h1>
                {props.doctor.isDoctor ? [
                <h3>{props.doctor.doctorParams.specialization}</h3>,
                <h6>Experience: {props.doctor.doctorParams.experience}</h6>]
                    : <div></div>}
                <h6>Address: {props.doctor.address.addressline}</h6>
                <h6>Phone No: {props.doctor.phoneNo}</h6>
                {/*<h6>Languages: {Profile.getLanguage(props.doctor)}</h6>*/}
                {/*<h6><b>Opening Hours: {Profile.getOpeningHours(props.doctor)}</b></h6>*/}
            </div>
            {props.doctor.isDoctor ? [
            <div className="col-md-2" style={{marginTop: 3 + 'em'}}>
                <Rater total={5} rating={props.doctor.doctorParams.reviews.rating} interactive={false}/>
            </div>] : [<div/>]}
        </div>
    </div>
}

function TabView (props) {
    return <div className="container container-fluid">
        <div className="row">
            <div className="col-md-8 col-md-offset-2" style={{marginRight: 2 + 'em'}}>
                <Tabs bsStyle="tabs">
                    <Tab eventKey={1} title="Reviews">
                        <TabContent>
                            <Review Summary = "Excellent Doctor" Detail = "I have visited this doctor and found their services to be very satisfactory.">
                            </Review>
                        </TabContent>
                    </Tab>
                    {props.user && props.user.id==props.docId ? [
                    <Tab eventKey={2} title="Provide Review">
                        <TabContent>
                            <AddReview/>
                        </TabContent>
                    </Tab>,
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
                                <Button className="ButtonWidth btn btn-primary" bsStyle="primary" type="submit" disabled={true}>Request Appointment</Button>
                                {/*<button className="btn btn-primary" type="submit">Request Appointment</button>*/}

                            </form>
                        </TabContent>
                    </Tab>] : [<div/>]}
                </Tabs>
            </div>
        </div>
    </div>
}


export default withRouter(Profile);