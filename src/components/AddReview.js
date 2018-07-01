import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import ControlLabel from "react-bootstrap/es/ControlLabel";
import Rater from "react-rater";
import {Star} from "react-rater";
import FormGroup from "react-bootstrap/es/FormGroup";
import Row from "react-bootstrap/es/Row";
import Button from "react-bootstrap/es/Button";
import FormControl from "react-bootstrap/es/FormControl";
import './../assets/css/Profile.css';


class AddReview extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            detail : '',
            rating : ''
        };

        this.handleChangeDetail = this.handleChangeDetail.bind(this);
        this.handleChangeRating = this.handleChangeRating.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeDetail(value) {
        this.setState(Object.assign({}, this.state, {detail: value}));
    }

    handleChangeRating(value) {
        this.setState(Object.assign({}, this.state, {rating: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

        let user = {
            detail: this.state.detail,
            rating: this.state.rating
        };

        this.props.onSubmit(user);
    }

    render() {
        return (
            <div className="container" style={{margin:'10px'}}>
                <form onSubmit={this.handleSubmit}>
                    <h4>Please provide your reviews about your last appointment with the doctor.</h4>
                    <Rater total={5} onChange = {this.handleChangeRating}>
                        <Star/>
                    </Rater>
                    <FormGroup className = "FormGroupMargin" controlId="formControlsTextarea">
                        <Row  className="FontStyle" componentClass={ControlLabel}>
                            Details
                        </Row>
                        <Row>
                            <FormControl componentClass="textarea"
                                         id = "addReviewDetail"
                                         placeholder="Explain your experience in detail."
                                         onChange={this.handleChangeDetail}/>
                        </Row>
                    </FormGroup>
                    <Button type="submit"
                            id = "addReviewButton"
                            disabled={this.state.detail == undefined || this.state.detail == '' ? true : false}>Submit</Button>
                </form>
            </div>

        );
    }
}

export default withRouter(AddReview);