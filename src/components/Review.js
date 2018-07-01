import React, { Component } from 'react';
import Rater from "react-rater";
import {Star} from "react-rater";
import { withRouter} from 'react-router-dom';

class Review extends Component {
    Detail;

    render() {

        return (
            <div className="container" style={{margin:'10px'}}>
                <div className="row border border-primary">
                    <div className="col-md-6">
                        <h5 id = "ReviewDetail">{this.props.Detail}</h5>
                    </div>
                    <div className="col-md-2">
                        <Rater total={5} rating={4} interactive={false}>
                            <Star className = "react-rater-star-individual"/>
                        </Rater>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Review);