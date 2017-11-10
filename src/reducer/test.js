import { SET_MESSAGE } from '../actions/types'

const defaultState = {
    message:'Hello!'
}

const test = (state = defaultState , action ) => {
    switch(action.type){
        case SET_MESSAGE:
            return {
                message: action.message
            }

        default:
            return state
    }
}

export default test