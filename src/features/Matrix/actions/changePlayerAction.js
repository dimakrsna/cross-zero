import { CHANGE_PLAYER } from './../../../store/consts'

export const changePlayerAction = (value) => {
    return {
        type: CHANGE_PLAYER,
        payload: value
    }
}