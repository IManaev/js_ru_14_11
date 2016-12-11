import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment,loadArticleComments } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'

class CommentList extends Component {
    static propTypes = {
        //from connect
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired,
        loadArticleComments: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }

    componentDidMount() {
        const {article} = this.props
        this.props.loadArticleComments(article.id)
    }

    componentWillReceiveProps(nextProps) {
        //console.log('---', 'CL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
                {this.getCommentsLoading()}
            </div>
        )
    }

    getCommentsLoading(){
        const {loading} = this.props
        return loading ? <div>Loading</div> : null
    }

    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const { article, comments, isOpen, addComment } = this.props
        const commentForm = <NewCommentForm articleId = {article.id} addComment = {addComment} />
        if (!isOpen || !comments.length) return <div>{commentForm}</div>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => {
    const stateComments = state.comments.entities.valueSeq().toArray()
    const comments = (props.article.comments || []).map(id => {
        return stateComments.find(item => {
            return item.get('id') == id
        })
    })
    return {
        comments: comments,
        loading:state.comments.loading
    }
}, { addComment, loadArticleComments})(toggleOpen(CommentList))