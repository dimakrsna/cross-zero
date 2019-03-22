import React from 'react'

export const MatrixElemComponent = (props) => {
    let { index, elemHandler, value} = props;
    return <div className="game__item" data-item={index} onClick={elemHandler}>{value}</div>
}


