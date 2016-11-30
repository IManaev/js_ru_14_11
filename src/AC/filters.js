/**
 * Created by manaev on 30/11/2016.
 * @author manaev
 */
import {UPDATE_FILTERS} from '../constants'

export const updateFilters = (payload) =>{
    return {
        type:UPDATE_FILTERS,
        payload:payload
    }
}