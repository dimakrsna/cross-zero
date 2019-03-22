import React from 'react'

export const InputComponent = (props) => {
    let {inputHandler} = props;

    return  <input type="number" id="complexity" min={3} max={9} defaultValue={3} className="complexity__input" onChange={inputHandler}/>
}