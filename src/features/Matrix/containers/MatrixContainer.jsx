import React, { Component } from 'react'
import { connect } from 'react-redux'

import MatrixElemContainer from './MatrixElemContainer'


class MatrixContainer extends Component {

    mapRows() {
        let { complexityValue, gameState } = this.props

        if (gameState) {
            let i = 0, rows = [];

            for (; i < complexityValue; i++) {
                rows.push(<div className="game__row" data-row={i} key={`row-${i}`}>
                    {this.mapElemsInRow(complexityValue)}
                </div>)
            }

            return <React.Fragment>{rows}</React.Fragment>
        }
    }

    mapElemsInRow(n) {
        let elems = [], i = 0;

        for (; i < n; i++) {
            elems.push(<MatrixElemContainer key={`elem-${i}`} index={i} />)
        }

        return <React.Fragment>{elems}</React.Fragment>
    }

    render() {
        return (
            <div className="game">
                {this.mapRows()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        complexityValue: state.complexityValue,
        gameState: state.gameState
    }
}

export default connect(mapStateToProps)(MatrixContainer)