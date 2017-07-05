import React from 'react';

export default class RegistrationForm extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="app">
                <h1>App</h1>

                <input className="submit" type="submit" onClick={this.onSubmit} />

            </div>
        )
    }

    onSubmit() {
        console.log('On submit');
    }

}

