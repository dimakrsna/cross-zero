import { CHANGE_GAME_STATE } from './../../../store/consts'

export function gameStateReducer(state = false, action){
    switch(action.type){
        case CHANGE_GAME_STATE: {
            return action.payload
        }
    }

    return state
}