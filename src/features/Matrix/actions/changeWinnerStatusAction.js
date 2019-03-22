import { WINNER_STATUS } from '../../../store/consts'

export const changeWinnerStatusAction = (value) => {
    return {
        type: WINNER_STATUS,
        payload: value
    }
}