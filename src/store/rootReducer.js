import { createStore, combineReducers } from 'redux'

import { complexityReducer } from './../features/Complexity/reducers/complexityReducer'
import { gameStateReducer } from './../features/Menu/reducers/gameStateReducer'
import { changePlayerReducer } from './../features/Matrix/reducers/changePlayerReducer'
import { writeMessageReducer } from './../features/Message/reducers/writeMessageReducer' 
import { changeWinnerStatusReducer } from './../features/Matrix/reducers/changeWinnerStatusReducer'

const rootReducer = combineReducers({
    complexityValue: complexityReducer,
    gameState: gameStateReducer,
    currentPlayer: changePlayerReducer,
    message: writeMessageReducer,
    winnerStatus: changeWinnerStatusReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());