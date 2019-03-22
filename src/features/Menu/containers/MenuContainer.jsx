import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StartBtnComponent } from '../components/StartBtnComponent'
import { ResetBtnComponent } from './../components/ResetBtnComponent'
import { changeGameStateAction } from './../actions/changeGameStateAction'
import { writeMessageAction } from './../../Message/actions/writeMessageAction'
import { complexityAction } from './../../Complexity/actions/complexityAction'
import { changeWinnerStatusAction } from './../../Matrix/actions/changeWinnerStatusAction'


export class MenuContainer extends Component {

    startBtnHandler = () => {
        let { complexityValue, dispatch } = this.props

        if(complexityValue >= 3 &&  complexityValue <= 9){
            dispatch(changeGameStateAction(true))
            dispatch(writeMessageAction({}))
        } else if (!complexityValue){
            dispatch(writeMessageAction(({text: 'Введите размер N х N', status: 'error'})))
        }
    }

    resetBtnHandler = () => {
        let { dispatch } = this.props

        if(this.props.gameState){
            dispatch(complexityAction(3))
            dispatch(changeGameStateAction(false))
            dispatch(changeWinnerStatusAction(false))
            dispatch(writeMessageAction(({})))
        }
    }

    render() {
        return (
            <nav className="menu">
                <StartBtnComponent startBtnHandler={this.startBtnHandler} winnerStatus={this.props.winnerStatus}/>
                {this.props.gameState && <ResetBtnComponent resetBtnHandler={this.resetBtnHandler} winnerStatus={this.props.winnerStatus}/>}
            </nav>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        gameState: state.gameState,
        complexityValue: state.complexityValue,
        winnerStatus: state.winnerStatus
    }
}

export default connect(mapStateToProps)(MenuContainer)