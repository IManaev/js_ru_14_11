/**
 * Created by manaev on 30/11/2016.
 * @author manaev
 */

import {UPDATE_FILTERS} from '../constants'

const defaultFiltersState = {
    value:'',
    label:null,
    from:null,
    to:null
}

export default (state=defaultFiltersState,action) => {
    const {type,payload} = action
    switch(type){
        case UPDATE_FILTERS : {
            return {...state,...payload}
        }
    }
    return state
}