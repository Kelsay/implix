import React from 'react';
import PubSub from 'pubsub-js';

export default class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: {}
        };
        this.counter = 0;
        this.timeouts = [];
        let receiver = PubSub.subscribe('MessagesUpdate', this.updateReceiver.bind(this));
    }

    updateReceiver(msg, data) {
        let messages = {};
        for (let message of data) {
            messages[`message_${this.counter += 1}`] = message;
        }
        this.setState({'messages': Object.assign(this.state.messages, messages)});
    }

    removeMessage(id) {
        let newMessages = Object.assign({}, this.state.messages);
        newMessages[id] = null;
        this.setState({messages: newMessages});
    }

    hideMessageBox(id) {
        console.log(this.ref[id]);
    }

    render() {
        let messages = [];
        for (let id in this.state.messages) {
            let text = this.state.messages[id];
            if (text !== null) {
                messages.push(<li ref={id} key={id} className="message">{text}</li>);
                if (!this.timeouts[id]) {
                    this.timeouts[id] = setTimeout(this.removeMessage.bind(this, id), 3000);
                }
            }
        }

        return (
            <div className="messages">
                <ul>
                    {messages}
                </ul>
            </div>
        );
    }

}
