import { CHANGE_PLAYER } from './../../../store/consts'

export function changePlayerReducer(state = "", action){
    switch(action.type){
        case CHANGE_PLAYER: {
            return action.payload
        }
    }

    return state
}