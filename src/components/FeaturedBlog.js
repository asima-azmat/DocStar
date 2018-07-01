import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import {Badge} from 'react-materialize'
import { Panel } from 'react-bootstrap';
import Feed from '../components/Feed';

class FeaturedBlog extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const article = this.props.article;
        return (
            <Panel>
                <Panel.Body>
                    <div className="post-panel">
                        <div className="main-body">
                            <h3 className="post-title"><Link to={`/blog/${article._id}`}>{article.blogHeading}</Link></h3>
                            <div className="post-body">
                                <p className="" dangerouslySetInnerHTML={{__html: article.blogText.substr(0,100)+'...'}}></p>
                            </div>
                            <div className="response-count pull-right">Comments: <Badge>{Feed.getNumberOfComments(article.comments)}</Badge></div>
                            <a className="read-more"><Link to={`/blog/${article._id}`}>Read more</Link></a>
                        </div>

                        <div className="post-stats clearfix">
                            <div className="response-count pull-right">Created On: {Feed.getCreatedDate(article.createdAt)}</div>
                            <div className="pull-left">By: <Link to={`/doctor/${article.doctorId._id}`}>{Feed.giveDoctorName(article.doctorId)}</Link></div>
                        </div>
                    </div>
                </Panel.Body>
            </Panel>
        );
    }
}

export default withRouter(FeaturedBlog);