import { WRITE_NEW_MESSAGE } from '../../../store/consts'

export function writeMessageReducer(state = {}, action){

    switch(action.type){
        case WRITE_NEW_MESSAGE:{
            return action.payload
        }
    }

    return state
}