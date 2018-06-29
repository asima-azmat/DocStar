import {follow, getUserProfile} from "../redux/actions/actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import React, { Component } from 'react';
import Rater from "react-rater";
import {Star} from "react-rater";

class Review extends Component {
    Summary;
    Detail;

    render() {

        return (
            <div className="container" style={{margin:'10px'}}>
                <div className="row border border-primary">
                    <div className="col-md-6">
                        <h5 id = "ReviewSummary"><b>{this.props.Summary}</b></h5>
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


Review.propTypes = {
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
})(Review);