import React, { Component } from 'react';
import MediumEditor from 'medium-editor'
import './../../node_modules/medium-editor/dist/css/medium-editor.min.css'
import './../assets/css/medium.css';
import { withRouter, Link } from "react-router-dom";
import { Avatar } from 'react-md';

class Editor extends Component
{
    constructor ()
    {
        super();
        this.state = {
            title: '',
            text: '',
            description: ''
        };

        this.publishStory = this.publishStory.bind(this);
    }

    publishStory ()
    {
        console.log('publishing...');
        const blog = {};
        const text = this.state.text;
        const heading = document.getElementById('editor-title').value;
        if (text.length===0 || heading.length===0)
            return;
        blog.blogText = text;
        blog.blogHeading = heading;
        this.props.onSubmit(blog);
    }

    componentDidMount () {
        const editor = new MediumEditor(/*dom, */".medium-editable",{
            autoLink: true,
            delay: 1000,
            targetBlank: true,
            toolbar: {
                buttons: [
                    'bold',
                    'italic',
                    'quote',
                    'underline',
                    'anchor',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'strikethrough',
                    'subscript',
                    'superscript',
                    'pre',
                    'html',
                    'justifyCenter'
                ],
                diffLeft: 25,
                diffTop: 10,
            },
            anchor: {
                placeholderText: 'Type a link',
                customClassOption: 'btn',
                customClassOptionText: 'Create Button'
            },
            paste: {
                cleanPastedHTML: true,
                cleanAttrs: ['style', 'dir'],
                cleanTags: ['label', 'meta'],
                unwrapTags: ['sub', 'sup']
            },
            anchorPreview: {
                hideDelay: 300
            },
            placeholder: {
                text: 'Write your blog...'
            }
        })
        editor.subscribe('editableInput', (ev, editable) => {
            if(typeof document !== 'undefined')
                this.setState({
                    title: document.getElementById('editor-title').value,
                    text: editor.getContent(0),
                    description: `${editor.getContent(0).substring(0,30).toString()}...`
                })
        })
    }

    getDoctorName(user)
    {
        return user.firstName + ' ' + user.lastName;
    }

    render() {
        const user = this.props.user;

        return (
            <div>
                <div className="container-fluid main-container">
                    <div className="row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
                        <div id="main-post" className="col-xs-10 col-md-8 col-md-offset-2 col-xs-offset-1 main-content">
                            <div className="post-metadata">
                                <Avatar random>{user.firstName.substr(0,1)}</Avatar>
                                <div className="post-info">
                                    <div data-react-className="PopoverLink" data-react-props="{&quot;user_id&quot;:608,&quot;url&quot;:&quot;/users/netk&quot;,&quot;children&quot;:&quot;netk&quot;}">
                                        <span className="popover-link" data-reactroot="">{this.getDoctorName(user)}</span>
                                    </div>
                                    <small>{new Date().toDateString()}</small>
                                </div>
                            </div>
                            <div className="publish-button pull-right">
                                <button onClick={()=>this.publishStory()} className="button green-border-button" role="button" aria-haspopup="true" aria-expanded="false">Publish <i className="fa fa-globe"></i></button>
                            </div>

                            <form className="editor-form main-editor" autoComplete="off" >
                                <div className="form-group">
                                </div>
                                <div className="form-group">
                                    <textarea col="1" className="editor-title" id="editor-title" placeholder="Title"></textarea>
                                </div>
                                <div className="form-group">
                                    <textarea id="medium-editable" className="medium-editable" ></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Editor);