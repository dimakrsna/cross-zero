import { COMPLEXITY_VALUE } from './../../../store/consts'

export function complexityReducer(state = 3, action){
    switch (action.type){
        case COMPLEXITY_VALUE:
            return action.payload
    }

    return state
}