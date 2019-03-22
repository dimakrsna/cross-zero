import { WRITE_NEW_MESSAGE } from '../../../store/consts'

export const writeMessageAction = (message) => {
    return {
        type: WRITE_NEW_MESSAGE,
        payload: message,
    }
}