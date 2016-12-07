/**
 * Created by manaev on 07/12/2016.
 * @author manaev
 */
import { POST_COMMENT } from '../constants'

import {GENERATE_ID} from '../middlewares/idGenerator'

export function postComment(comment,articleId) {
    return {
        type: POST_COMMENT,
        payload: comment,
        articleId:articleId,
        meta:GENERATE_ID
    }
}