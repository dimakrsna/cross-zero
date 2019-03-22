import React from 'react'

export const ResetBtnComponent = (props) => {
    let { resetBtnHandler, winnerStatus } = props;
    
    if(!winnerStatus){
        return <span className="menu__item menu__item--reset" onClick={resetBtnHandler}>Прервать игру</span>
    } else {
        return <span className="menu__item menu__item--start" onClick={resetBtnHandler}>Сыграть заново</span>
    }
}