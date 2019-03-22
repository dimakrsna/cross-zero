import React from 'react'

export const StartBtnComponent = (props) => {
    let { startBtnHandler, winnerStatus } = props;

    if(!winnerStatus){
        return <span className="menu__item menu__item--start" onClick={startBtnHandler}>Начать игру</span>
    } else {
        return ""
    }
    
}