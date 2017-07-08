/**
 * Main application, entry point and initialization of the components
 */

import React from 'react';
import RegistrationForm from "./RegistrationForm/RegistrationForm.jsx";
import Messages from './Messages/Messages.jsx';


export default class App extends React.Component {

    render() {
        return (
            <main>
                <RegistrationForm/>
                <Messages/>
            </main>
        );
    }

}
