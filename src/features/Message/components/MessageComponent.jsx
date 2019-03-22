import React from 'react'
import { connect } from 'react-redux'

const MessageComponent = (props) => {
    let { text, status } = props.message;
    return (text != "") ? <p className={`message ${(status == 'error') ? 'message__error' : '' }`}>{text}</p> : ""
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps)(MessageComponent)

