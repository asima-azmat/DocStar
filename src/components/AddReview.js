import React from 'react';
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

    render() {
        return (
            <div className="container" style={{margin:'10px'}}>
                <form>
                    <h4>Please provide your reviews about your last appointment with the doctor.</h4>
                    <Rater total={5}>
                        <Star/>
                    </Rater>
                    <FormGroup className = "FormGroupMargin" controlId="formControlsTextarea">
                        <Row  className="FontStyle" componentClass={ControlLabel}>
                            Details
                        </Row>
                        <Row>
                            <FormControl componentClass="textarea"
                                         id = "addReviewDetail"
                                         placeholder="Explain your experience in detail."/>
                        </Row>
                    </FormGroup>
                    <Button type="submit"
                            id = "addReviewButton">Submit</Button>
                </form>
            </div>

        );
    }
}

export default withRouter(AddReview);