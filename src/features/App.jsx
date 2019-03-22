import React, { Component } from 'react'

import ComplexityContainer from './Complexity/containers/ComplexityContainer'
import MenuContainer from './Menu/containers/MenuContainer'
import MatrixContainer from './Matrix/containers/MatrixContainer'
import MessageComponent from './Message/components/MessageComponent'
import { TitleComponent } from './Title/components/TitleComponent'

export class App extends Component {

    render() {
        return (
            <React.Fragment>
                <TitleComponent />
                <MenuContainer />
                <ComplexityContainer />
                <MatrixContainer />
                <MessageComponent />
            </React.Fragment>
        )
    }
}
