import React, { Component } from 'react'
import {Badge} from 'react-materialize'
import { Link } from 'react-router-dom';
import { Button } from 'react-md';

class AsideFeed extends Component
{
    static giveDoctorName(doctor)
    {
        return doctor.firstName + ' ' + doctor.lastName + '|' + doctor._id
    }

    render ()
    {
        const authors = this.props._articles.map((_article)=> {
                    return AsideFeed.giveDoctorName(_article.doctorId)
                }
            )
            .sort()
            .filter((a, b, self)=>{
                return self.indexOf(a) === b
            })
            .map((doctor)=>
                <a className="tag"><Link to={`/doctor/${doctor.substr(doctor.indexOf('|')+1)}`}>{doctor.substr(0,doctor.indexOf('|'))}</Link></a>
            )

        const top_articles = this.props._articles.filter(_article => _article.comments.length > 0).sort(function(a1,a2){
            return a1.comments.length < a2.comments.length
            }).map((_article, i)=>
                <li className="top-stories-list-item">
                    <div className="count-button-wrapper">
                        <span className="count-button">{i+1}</span>
                    </div>
                    <div className="top-stories-links">
                        <a className="post-title"><Link to={`/blog/${_article._id}`}>{_article.blogHeading}</Link></a><br/><br/>
                        <small>
                          <div data-react-className="PopoverLink" data-react-props="">
                            <span className="popover-link" data-reactroot=""><Badge>{_article.comments.length}</Badge> comments</span>
                          </div>
                        </small>
                    </div>
                </li>
            )

        return(
            <div>
                <aside className="col-md-4 main-sidebar">
                    <h4 className="small-heading border-top">Featured Authors</h4>
                    <div data-react-className="TagList" data-react-props="">
                        <div className="tags-wrapper undefined" data-reactroot="">
                            {authors}
                        </div>
                    </div>

                    <h4 className="small-heading border-top">Top stories</h4>
                    <div className="sidebar-top-stories">
                        <ul>
                            {top_articles}
                        </ul>
                    </div>
                </aside>
            </div>
        )
    }
}
export default AsideFeed