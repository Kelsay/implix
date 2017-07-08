import React from 'react';
import PubSub from 'pubsub-js';

export default class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        let receiver = PubSub.subscribe('MessagesUpdate', this.updateReceiver.bind(this));
    }

    updateReceiver(msg, data) {
        this.setState({ 'messages': this.state.messages.concat(data)});
    }

    render() {

        let messages = this.state.messages.map(function (text, index) {
            return <li key={index}>{text}</li>;
        });
        
        return (
            <div className="messages">
                {messages}
            </div>
        );
    }

}
