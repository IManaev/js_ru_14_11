import {ADD_COMMENT, LOAD_COMMENTS, LOAD_COMMENTS_PAGE} from '../constants'
import {PAGE_SIZE} from '../constants'
export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function loadCommentsByPage(page) {
    return (dispatch, getState) => {
        const comments = getState().comments.entities.valueSeq().toArray()
        if (!comments || comments.length ==0 || comments.length < page * PAGE_SIZE) {
            dispatch({
                type: LOAD_COMMENTS_PAGE,
                payload: {page},
                callAPI: `/api/comment?limit=${PAGE_SIZE}&offset=${page * PAGE_SIZE}`
            })
        }
    }
}

export function checkAndLoadComments(articleId) {
    return (dispatch, getState) => {
        const {commentsLoaded, commentsLoading} = getState().articles.getIn(['entities', articleId])
        if (commentsLoaded || commentsLoading) return null
        dispatch({
            type: LOAD_COMMENTS,
            payload: {articleId},
            callAPI: `/api/comment?article=${articleId}`
        })
    }
}