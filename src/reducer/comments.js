import { ADD_COMMENT, SUCCESS, START,LOAD_ARTICLE_COMMENTS } from '../constants'
import { arrayToMap, ReducerState } from '../utils'
import { Record, Map } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null,
    loading: false
})

const defaultComments= arrayToMap([], CommentModel)

const defaultState = new ReducerState({
    entities: defaultComments,
    loading: false
})
export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {

        case LOAD_ARTICLE_COMMENTS + START:
              //здесь не достаточно повесить loading на весь comments, ведь ты для конкрентной статьи загружаешь
            return comments.set('loading', true)

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            //вот это лишнее, используй mergeIn
            const commentsArr = comments.entities.valueSeq().toArray().concat(payload)
            return comments
                .set('entities',arrayToMap(commentsArr,CommentModel))
                .set('loading', false)

        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})
    }

    return comments
}
