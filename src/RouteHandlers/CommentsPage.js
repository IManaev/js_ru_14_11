/**
 * Created by manaev on 14/12/2016.
 * @author manaev
 */
import React, { Component, PropTypes } from 'react'
import Comment from '../components/Comment'
import {PAGE_SIZE} from '../constants'
import { connect } from 'react-redux'
import { loadCommentsByPage} from '../AC/comments'

class CommentsPage extends Component {
    static propTypes = {
        comments:PropTypes.array,
        loadCommentsByPage:PropTypes.func,
        params:PropTypes.shape({
            page:PropTypes.string
        }).isRequired
    };
    //а при обновлении как быть
    componentDidMount(){
        this.props.loadCommentsByPage(this.props.params.page)
    }

    render() {
        const {comments} = this.props
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul></div>
    }
}
//я советовал не использовать здесь connect
export default connect((state, props) => {
    const {page} = props.params
    console.log('prepare to render comments',page,state.comments.entities.valueSeq().toArray())
    const start = page > 0 ? (page-1)*PAGE_SIZE : 0
    const end = page > 0 ? (page)*PAGE_SIZE : PAGE_SIZE
    return {
        //лучше .slice, зачем тебе лишние мутации
        comments: state.comments.entities.valueSeq().toArray().splice(start,end)
    }

}, { loadCommentsByPage})(CommentsPage)
