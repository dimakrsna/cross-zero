import React, { Component } from 'react'
import { connect } from 'react-redux'

import { InputComponent } from './../components/InputComponent'
import { complexityAction } from './../actions/complexityAction'
import { writeMessageAction } from './../../Message/actions/writeMessageAction'

class ComplexityContainer extends Component {

    inputHandler = (e) => {
        let value = parseInt(e.target.value && e.target.value);
        let { dispatch } = this.props;

        if(value < 3){
            dispatch(writeMessageAction({text: 'Ошибка! Минимальное значение 3', status: 'error'}))
        } else if(value > 9){
            dispatch(writeMessageAction({text: 'Ошибка! Максимальное значение 9', status: 'error'}))
        } else {
            dispatch(writeMessageAction({}))
            this.props.dispatch(complexityAction(value))
        }
    }

    render() {
        if(!this.props.gameState){
            return (
                <div className="complexity">
                    <label htmlFor="complexity" className="complexity__text">Введите размер N х N</label>
                    <InputComponent inputHandler={this.inputHandler} />
                </div>
            )
        } else {
            return ''
        }
    }
}

const mapStateToProps = (state) => {
    return {
        gameState: state.gameState
    }
}

export default connect(mapStateToProps)(ComplexityContainer)

