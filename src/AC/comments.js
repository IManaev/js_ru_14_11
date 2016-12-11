import { ADD_COMMENT,LOAD_ARTICLE_COMMENTS,SUCCESS,START } from '../constants'

import CommentsDAO from '../dao/CommentsDAO'

export const loadCommentsStart = (articleId) =>{
    return {
        type:LOAD_ARTICLE_COMMENTS+START
    }
}

export const loadCommentsSuccess = (comments) =>{
    return {
        type:LOAD_ARTICLE_COMMENTS+SUCCESS,
        payload:comments
    }
}


export const loadArticleComments = (articleId) => {
    return (dispatch,getState) => {
        CommentsDAO.loadArticleComments(articleId,dispatch,getState)  
    }
}


export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}