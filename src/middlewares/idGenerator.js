/**
 * Created by manaev on 07/12/2016.
 * @author manaev
 */

export const GENERATE_ID = 'GENERATE_ID'

export default store => next => action => {
    if (action.meta && action.meta == GENERATE_ID) {
        next({...action, 
            gen_id: action.gen_id ? action.gen_id : GUID()})
    } else {
        next(action)
    }
}

const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
}

const GUID = () => {
    return [s4(), s4(), '-', s4(), '-', s4(), '-', s4(), '-', s4(), s4(), s4()].join('')
}