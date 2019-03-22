import { COMPLEXITY_VALUE } from './../../../store/consts'

export const complexityAction = (value) => {
    return {
        type: COMPLEXITY_VALUE,
        payload: value
    }
}