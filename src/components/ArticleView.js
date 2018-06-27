import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
    getArticle, 
    clap,
    follow
} from './../redux/actions/actions'
import {Badge} from 'react-materialize'
import {Panel,Label} from 'react-bootstrap'
import PropTypes from 'prop-types'
import FollowButton from './FollowButton'
import AddCommentButton from './AddCommentButton'
import Editor from './Editor'

const mapStateToProps = state => {
    return {
        _article: state.articles.article,
        user: state.authUser.user    
    }
}


class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}



class ArticleView extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          showPopup: false
        };
    }

    togglePopup()
    {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }



    componentDidMount() {
        document.body.className = 'posts show'
    }
    componentWillMount() {
        this.props.getArticle(this.props.match.params.id)
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
                            <div className="pull-right">

                            </div>
                            <div className="post-metadata">
                                <img alt='' className="avatar-image" src={author_img} height="40" width="40" />
                                <div className="post-info">
                                    <div data-react-className="PopoverLink" data-react-props=""><span className="popover-link" data-reactroot=""><a href={`/doctor/${author_id}`}>{author_name}  </a></span>
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
                                <h4 className="medium-heading"><Badge>{ArticleView.getCommentCount(comments)}</Badge> Responses</h4>
                                <CommentsVar comments={comments}></CommentsVar>
                            </div>
                            {/*<div className="col-xs-10 col-md-6 col-xs-offset-1 col-md-offset-3 main-content related-stories">
                                <h4 className="small-heading">Related stories</h4>
                                <div className="post-list-item">
                                    <div className="flex-container">
                                        <div className="avatar-wrapper">
                                            <img alt="" className="avatar-image" src="" height="40" width="40" />
                                        </div>
                                        <div className="post-info">
                                            <strong className="pli-title"><a href="#">asdasd</a></strong><br/>
                                            <small className="pli-username"><a href="#">asdad</a></small>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                    {/*<div className="post-metadata-bar" data-page="post-metadata-bar">
                        <div className="flex-container is-inView" data-behavior="animated-metadata">
                            <div className="post-stats flex-container">
                                <div className="like-button-wrapper">
                                    <form className="button_to" method="get" action=""><button className="like-button" data-behavior="trigger-overlay" type="submit">      <i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button>
                                    </form> <span className="like-count">0</span>
                                </div>

                                <div>
                                    <a className="response-icon-wrapper" href="https://my-medium-clone.herokuapp.com/posts/it-s-looking-good#responses">
                                        <i className="fa fa-comment-o"></i>
                                        <span className="response-count" data-behavior="response-count">asdas</span>
                                    </a>
                                </div>
                                <div className="bookmark-button">
                                    <div className="bookmark-button-wrapper">
                                        <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="metabar-author-info flex-container flex-space-btw">
                                <div>
                                    <img alt={author_name} className="avatar-image" src={author_img} height="35" width="35" />
                                    <div data-react-className="PopoverLink" ><span className="popover-link" data-reactroot=""><a href={`/profile/${author_img}`}>{author_name}</a></span></div>
                                </div>

                                <div className="container-fluid main-container">
                                    <div className="col-md-6 col-md-offset-1 dashboard-main-content">
                                        <div className="posts-wrapper animated fadeInUp" data-behavior="endless-scroll" data-animation="fadeInUp-fadeOutDown">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        );
    }
}

ArticleView.propTypes = {params: PropTypes.object.isRequired}

export default connect(mapStateToProps, {getArticle, clap, follow})(ArticleView);