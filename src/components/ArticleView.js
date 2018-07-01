import React, { Component } from 'react';
import {Badge} from 'react-materialize'
import {Panel,Label,ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap'
import { withRouter, Link} from 'react-router-dom';
import { FontIcon, Button, TextField, Chip, Avatar, Card} from 'react-md';
import { AlertMessage } from './AlertMessage';

const style = { maxWidth: 500 };

class ArticleView extends Component
{
    constructor(props)
    {
        super(props);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    componentDidMount() {
        document.body.className = 'posts show'
    } 
    componentWillUnmount() {
        document.body.className = ''
    }

    static getCreatedDate(date)
    {
        date = new Date(date);
        return date.toDateString();
    }

    static getCommentCount(comments)
    {
        if (Array.isArray(comments))
            return comments.length;
    }

    static giveName(person)
    {
        return person.firstName + ' ' + person.lastName
    }

    handleCommentSubmit(event)
    {
        let comment = {}
        comment.commentText = event.target.commentText.value;
        comment.blogId = this.props.match.params.id;
        this.props.insertComment(comment);
    }

    render()
    {
        const { _id, blogText, feature_img, doctorId ,comments, blogHeading, createdAt} = this.props._article

        let author_name, author_img, author_id
        if (doctorId)
        {
            const { firstName, lastName, _id } = doctorId
            author_name = firstName + ' ' + lastName
            author_id = _id
            author_img = _id
        }

        const CommentsVar = ({comments = []}) => (
          <div>
            {comments.map(comment => (
                <Panel>
                    <Panel.Heading>{ArticleView.giveName(comment.personId)} wrote:</Panel.Heading>
                    <Panel.Body>{comment.commentText}</Panel.Body>
                </Panel>
            ))}
          </div>
        )

        return (
            <div>
                <div className="container-fluid main-container">
                    <div className="row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
                        <div id="main-post" className="col-xs-10 col-md-8 col-md-offset-2 col-xs-offset-1 main-content">
                            {this.props.user && (this.props.user.id===author_id) ? [
                            <div className="pull-right">
                                <Button floating primary onClick={() => this.props.history.push(`/blog/${_id}/edit`,this.props._article)}>edit</Button>&nbsp;
                                <Button floating secondary onClick={() => this.props.onDelete(_id)}>delete</Button>
                            </div> ] : [ <div/> ]}
                            <div className="post-metadata">
                                <Avatar random>{author_name.substr(0,1)}</Avatar>
                                <div className="post-info">
                                    <div data-react-className="PopoverLink" data-react-props=""><span className="popover-link" data-reactroot=""><Link to={`/doctor/${author_id}`}>{author_name}  </Link></span>
                                        <Label bsStyle="primary">Primary</Label>
                                    </div>
                                    <small>Published on {ArticleView.getCreatedDate(createdAt)}</small>
                                </div>
                            </div>

                            {/*If blog has a feature image*/}
                            {!feature_img || !feature_img.length > 0 ? '' : <div className="post-picture-wrapper">
                                <img src={feature_img} alt="feature img 540" />
                            </div> }

                            <h3 className="blogText">{blogHeading}</h3>
                            <div className="body">
                                <p></p>
                                <p className=""dangerouslySetInnerHTML={{__html: blogText}}>
                                </p>
                                <p></p>
                            </div>

                            {/*<div className="post-tags">
                                <a className="tag" href="">Story</a>
                                <a className="tag" href="">Community</a>
                            </div>*/}
                        </div>
                    </div>
                    <div>
                        <div className="post-show-footer row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
                            <div id="responses" className="col-xs-10 col-md-6 col-xs-offset-1 col-md-offset-3 main-content">
                                <h4 className="medium-heading"><Badge>{ArticleView.getCommentCount(comments)}</Badge> Comments</h4>
                                <CommentsVar comments={comments}></CommentsVar>
                            </div>
                        </div>
                    </div>
                    {this.props.user ? [
                    <Card style={style} className="md-block-centered">
                        <form onSubmit={this.handleCommentSubmit}>
                            <div className="md-full-width">
                                <Avatar random>{author_name.substr(0,1)}</Avatar>
                                <TextField
                                  id="commentText"
                                  lineDirection="left"
                                  rows={1}
                                  placeholder="Add your comment"
                                  leftIcon={<FontIcon>edit</FontIcon>}
                                />
                            </div>&nbsp;
                            <Button flat primary swapTheming type='submit' className="md-block-centered">Insert Comment</Button>
                            <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                        </form>
                    </Card> ] : [ <div/> ] }
                </div>
            </div>
        );
    }
}

export default withRouter(ArticleView);