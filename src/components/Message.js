import React, { Component } from 'react'

class Message extends Component {
    render() {
        return (
            <div>
                <h3>This message is coming from message ID {this.props.match.params.id}</h3>
            </div>
        )
    }
}


export default Message;
