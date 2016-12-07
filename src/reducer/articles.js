import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE,POST_COMMENT } from '../constants'
import { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    return acc.set(article.id, article)
}, new Map({}))


export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.articleId)
        case POST_COMMENT:
            return articlesState.update(action.articleId,(value)=>{
                return {...value,comments:value.comments.concat(action.gen_id)}
            })
    }

    return articlesState
}
