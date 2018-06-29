import React, { Component } from 'react';
import AsideFeed from './AsideFeed'
import {Badge} from 'react-materialize'
import { withRouter, Link} from 'react-router-dom';
import { Button } from 'react-md';

class Feed extends Component {

    componentWillReceiveProps(nextProps) 
    {    
    }
        
    componentWillMount() 
    {
        //this.props.loadArticles()
    }

    static giveDoctorName(doctor)
    {
        return <a className="read-more" href={`/doctor/${doctor._id}`}>{doctor.firstName + ' ' + doctor.lastName}</a>
    }

    static getCreatedDate(date)
    {
        date = new Date(date);
        return date.toDateString();
    }

    static getNumberOfComments(comments)
    {
        return comments.length;
    }
    
    render()
    {
        const articles = this.props.articles.reverse().map((article)=>
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
            )

        return ( 
            <div>
                <div className="container-fluid main-container">
                    <div className="col-md-6 col-md-offset-1 dashboard-main-content">
                        <div className="posts-wrapper animated fadeInUp" data-behavior="endless-scroll" data-animation="fadeInUp-fadeOutDown">
                            {articles}
                        </div>
                    </div>
                    {this.props.articles ? <AsideFeed _articles={this.props.articles} /> : ''}
                </div>
            </div>
        );
    }
}

export default withRouter(Feed);