import React from 'react';

export default class Message extends React.Component {

    render() {
        return (
            <li className="message">
                {this.props.text}
            </li>
        );
    }

}
