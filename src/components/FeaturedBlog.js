import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import {Badge} from 'react-materialize'

class FeaturedBlog extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="post-panel">
                <div className="main-body">
                    <h3 className="post-title"><Link to={`/blog/123`}>Yolo</Link></h3>
                    <div className="post-body">
                        <p className="" dangerouslySetInnerHTML={{__html: 'sdaad asdasd as da...'}}></p>
                    </div>
                    <div className="response-count pull-right">Comments: <Badge>{1}</Badge></div>
                    <a className="read-more"><Link to={`/blog/123`}>Read more</Link></a>
                </div>

                <div className="post-stats clearfix">
                    <div className="response-count pull-right">Created On:}</div>
                    <div className="pull-left">By: <Link to={`/doctor/123`}>Immi Khan</Link></div>
                </div>
            </div>
        );
    }
}

export default withRouter(FeaturedBlog);