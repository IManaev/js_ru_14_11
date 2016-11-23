import React, { Component,PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import {Comment as CommentShape} from '../shapes'

const CommentList = (props) => {
    return (
        <div>
            {getButton(props)}
            {getList(props)}
        </div>
    ) 
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(CommentShape),
    isOpen:PropTypes.bool,
    toggleOpen:PropTypes.func.isRequired,
}

const getButton =(props) => {
    const { comments, isOpen, toggleOpen } = props
    if ( !comments || !comments.length) return <span>No comments yet</span>
    return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
}
const getList = (props) =>  {
    const { comments, isOpen } = props
    if (!isOpen || !comments || !comments.length) return null
    const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
    return <ul>{commentItems}</ul>
}


export default toggleOpen(CommentList)