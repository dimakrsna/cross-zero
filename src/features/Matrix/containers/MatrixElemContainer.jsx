import React, { Component } from 'react'
import { connect } from 'react-redux'

import { MatrixElemComponent } from './../components/MatrixElemComponent'
import { changePlayerAction } from './../actions/changePlayerAction'
import { writeMessageAction } from './../../Message/actions/writeMessageAction'
import { changeWinnerStatusAction } from './../../Matrix/actions/changeWinnerStatusAction'

class MatrixElemContainer extends Component {

    state = {
        value: ""
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.state.value != nextState.value) ? true : false
    }

    elemHandler = () => {
        let { currentPlayer, winnerStatus } = this.props;

        if (this.state.value == "" && !winnerStatus) {

            if (currentPlayer == "") {
                this.changeElemValue("x")
            } else {
                (currentPlayer != "x") ? this.changeElemValue("x") : this.changeElemValue("o");
            }

        } else {
            return false
        }
    }

    changeElemValue(value) {
        this.props.dispatch(changePlayerAction(value))
        this.setState({ value: value })
    }

    checkWinner() {
        let chechedData = this.getValues()

        this.checkHorizontal(chechedData)
        this.checkVertical(chechedData)
        this.checkDiagonalLeft(chechedData)
        this.checkDiagonalRight(chechedData)
    }

    getValues() {
        let gameRows = document.querySelectorAll('.game__row')
        let items = []

        gameRows.forEach((el) => {
            let childItems = []

            Array.from(el.children).forEach((childElem) => {
                childItems.push(childElem.innerText)
            })

            items.push(childItems)
        })

        return items
    }

    checkArr(arr, lengthArr){
        let { dispatch } = this.props
        
        let resultX = arr.filter(
            (childVal) => {
                return childVal == 'x'
            }
        )

        let resultO = arr.filter(
            (childVal) => {
                return childVal == 'o'
            }
        )

        if (resultX.length == lengthArr) {
            dispatch(writeMessageAction({ text: 'Поздравляем! Выиграл Х' }))
            dispatch(changeWinnerStatusAction(true))
            dispatch(changePlayerAction('o'))
            return
        }

        if (resultO.length == lengthArr) {
            dispatch(writeMessageAction({ text: 'Поздравляем! Выиграл O' }))
            dispatch(changeWinnerStatusAction(true))
            dispatch(changePlayerAction('x'))
            return
        }
    } 

    checkHorizontal(dataArr) {
        let lengthArr = dataArr.length;

        dataArr.forEach((childArr) => {
            this.checkArr(childArr, lengthArr)
        })
    }

    checkVertical(dataArr) {
        let lengtArr = dataArr.length,
            turnedArr = []

        for (let i = 0; i < lengtArr; i++) {
            let turnedChildArr = []

            dataArr.forEach((childArr) => {
                turnedChildArr.push(childArr[i])
            })

            turnedArr.push(turnedChildArr)
        }

        this.checkHorizontal(turnedArr)
    }

    checkDiagonalLeft(dataArr) {
        let lengthArr = dataArr.length,
            diagonalLeftArr = [], 
            count = 0

        dataArr.forEach((childArr) => {
            diagonalLeftArr.push(childArr[count])
            count++
        })

        this.checkArr(diagonalLeftArr, lengthArr)
    }

    checkDiagonalRight(dataArr){
        let lengthArr = dataArr.length,
            diagonalRightArr = [], 
            count = lengthArr

        dataArr.forEach((childArr) => {
            diagonalRightArr.push(childArr[--count])
        })

        this.checkArr(diagonalRightArr, lengthArr)
    }

    componentDidUpdate() {
        this.checkWinner()
    }

    render() {
        return <MatrixElemComponent index={this.props.index} elemHandler={this.elemHandler} value={this.state.value} />
    }
}

const mapStateToProps = (state) => {
    return {
        currentPlayer: state.currentPlayer,
        winnerStatus: state.winnerStatus
    }
}

export default connect(mapStateToProps)(MatrixElemContainer)