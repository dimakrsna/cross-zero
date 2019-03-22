import { WINNER_STATUS } from '../../../store/consts'

export function changeWinnerStatusReducer(state = false, action){
    switch(action.type){
        case WINNER_STATUS: {
            return action.payload
        }
    }

    return state
}