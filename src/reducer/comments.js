import {POST_COMMENT} from '../constants'
import {normalizedComments} from '../fixtures'
import {Map} from 'immutable'

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return acc.set(comment.id, comment)
}, new Map({}))

export default (comments = defaultComments, action) => {
    const {type, payload, response, error} = action

    switch (type) {
        case POST_COMMENT:
        {
            return comments.set(action.gen_id,
                {...action.payload, id: action.gen_id}
            )
        }
        default:
            return comments
    }
}