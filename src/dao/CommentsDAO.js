"use strict"

// require('es6-promise').polyfill();
// require('isomorphic-fetch');

import {loadCommentsStart, loadCommentsSuccess} from '../AC/comments'

const URL = {
    commentByArticleId: (articleId) => `/api/comment?article=${articleId}`
}


/**
 * just to keep action creator clear
 */
export default class CommentsDAO {
    
    static needsLoading(comments,commentsIds){
        const filteredComments = comments.entities.valueSeq()
            .toArray().filter(item => commentsIds.indexOf(item.id) > -1)
        return filteredComments.length != commentsIds.length
    }
    
    static async loadArticleComments(articleId, dispatch, getState) {
        const {comments,articles} = getState()
        if(!comments.loading){
            const article = articles.entities
                .valueSeq()
                .toArray()
                .find(article => article.id == articleId)
            if(CommentsDAO.needsLoading(comments,article.comments)){
                dispatch(loadCommentsStart())
                try {
                    const resp = await fetch(URL.commentByArticleId(articleId))
                    const json = await resp.json()
                    console.info('loading articles response ',json)
                    if (resp) {
                        dispatch(loadCommentsSuccess(json))
                    }
                } catch (err) {
                    //TODO add failure actions to comments and articles
                }   
            }
        }
    }
}