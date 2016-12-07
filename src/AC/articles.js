import { DELETE_ARTICLE,POST_COMMENT } from '../constants'

export function deleteArticle(articleId) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            articleId
        }
    }
}