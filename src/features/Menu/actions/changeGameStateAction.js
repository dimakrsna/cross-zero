import { CHANGE_GAME_STATE } from '../../../store/consts'

export const changeGameStateAction = (value) => {
    return {
        type: CHANGE_GAME_STATE,
        payload: value
    }
}