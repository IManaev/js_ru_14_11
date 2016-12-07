import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import { deleteArticle } from '../AC/articles'
import { connect } from 'react-redux'
import { postComment } from '../AC/comments'
class Article extends Component {

/*
    shouldComponentUpdate(nextProps) {
        return nextProps.isOpen != this.props.isOpen
    }
*/

    componentWillUpdate() {
        console.log('---', 'updating Article')
    }

    componentDidUpdate() {
        console.log('---', findDOMNode(this.refs.comments))
    }

    render() {
        const { article, toggleOpen } = this.props
        return (
            <section>
                <h3 onClick = {toggleOpen}>{article.title}</h3>
                <a href = "#" onClick = {this.handleDeleteArticle}>delete me</a>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        return (
            <div>
                <p>{article.text}</p>
                <CommentList postComment={this.handlePostComment} commentIds = {article.comments} ref = "comments" />
            </div>
        )
    }

    handlePostComment = comment => {
        const {article,postComment} = this.props
        postComment(comment,article.id)
    }
    
    handleDeleteArticle = ev => {
        ev.preventDefault()
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        comments: PropTypes.array,
        text: PropTypes.string
    }).isRequired,
    //from connect
    deleteArticle: PropTypes.func,
    postComment: PropTypes.func
}


export default connect(null, {
    deleteArticle,
    postComment
})(Article)