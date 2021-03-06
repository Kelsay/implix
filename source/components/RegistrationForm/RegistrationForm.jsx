﻿import React from 'react';

// Models
import RegistrationDataModel from './RegistrationDataModel.jsx';

// Validations
import ValidationRunner from '../Validation/ValidationRunner.jsx';
import NotEmptyValidator from '../Validation/NotEmptyValidator.jsx';
import EmailValidator from '../Validation/EmailValidator.jsx';
import PasswordValidator from '../Validation/PasswordValidator.jsx';
import StringLengthValidator from '../Validation/StringLengthValidator.jsx';
import NoDigitsValidator from '../Validation/NoDigitsValidator.jsx';
import DigitsOnlyValidator from '../Validation/DigitsOnlyValidator.jsx';
import ValueRangeValidator from '../Validation/ValueRangeValidator.jsx';

// Components
import Input from '../Inputs/Input.jsx';
import logo from '../../images/logo.png';

// Publish/Subscribe library
import PubSub from 'pubsub-js';

export default class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.setupState();
        this.setupValidationRules();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Assign validation rules to the field values
     */
    setupValidationRules() {
        this.rules = [
            ['firstName', 'First name', new NotEmptyValidator(), new NoDigitsValidator()],
            ['lastName', 'Last name', new NotEmptyValidator(), new NoDigitsValidator()],
            ['email', 'E-mail', new NotEmptyValidator(), new EmailValidator()],
            ['password', 'Password', new NotEmptyValidator(), new PasswordValidator()],
            ['textarea1', 'Textarea 1', new NotEmptyValidator(), new StringLengthValidator({min: 1, max: 10})],
            ['textarea2', 'Textarea 2', new NotEmptyValidator(), new StringLengthValidator({min: 1, max: 20})],
            ['vidNumber', 'VID Number', new NotEmptyValidator(), new DigitsOnlyValidator(), new StringLengthValidator({min: 1, max: 5})],
            ['ticketCount', 'Ticket count', new NotEmptyValidator(), new ValueRangeValidator({min: 1, max: 20})]
        ];
    }

    /**
     * Set default state
     */
    setupState() {
        this.state = RegistrationDataModel;
    }

    render() {
        let state = this.state;
        return (
            <div className="registration-form">
                <div className="wrapper">
                    <img src={logo} className="logo"/>
                    <h2 className="title-primary">Weekend promotion</h2>
                    <h3 className="title-secondary"><em>Promotion ends:</em> 20.03.2014, 12:00PM</h3>
                    <form>

                        <div className="switch offer-type">
                            <label>
                                <input type="radio" name="tickets"/> <span> 1 TICKET €109 </span>
                            </label>
                            <label>
                                <input type="radio" name="tickets"/> <span> 5 TICKETS €495 </span>
                            </label>
                        </div>

                        <Input type="text" name="firstName" placeholder="First Name" value={state.firstName} onChange={this.handleChange}/>
                        <Input type="text" name="lastName" placeholder="Last Name" value={state.lastName} onChange={this.handleChange}/>

                        <Input type="textarea" placeholder="Textarea 1" name="textarea1" value={state.textarea1} onChange={this.handleChange}/>
                        <Input type="textarea" placeholder="Textarea 2" name="textarea2" value={state.textarea2} onChange={this.handleChange}/>

                        <Input type="text" name="email" placeholder="E-mail" value={state.email} onChange={this.handleChange}/>
                        <Input type="password" name="password" placeholder="Password" value={state.password} onChange={this.handleChange}/>

                        <div className="bottom-panel">
                            <Input type="text" name="vidNumber" placeholder="VID Number" value={state.vidNumber} onChange={this.handleChange} className="vid-number"/>
                            <Input type="text" name="ticketCount" placeholder="1" value={state.ticketCount} onChange={this.handleChange} className="ticket-count"/>
                            <span className="ticket-count-label"> x Number of tickets</span>
                        </div>

                        <button className="register-button" onClick={this.handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        );
    }

    /**
     * Form submit handler
     * Run validations and display errors
     */
    handleSubmit(event) {
        event.preventDefault();
        let runner, result;
        runner = new ValidationRunner(this.rules, this.state);
        result = runner.execute();
        if (!result.length) {
            this.processValidData();
        } else {
            this.displayMessages(result);
        }
    }

    /**
     * Publish the list of errors to the registered subscribers
     */

    displayMessages(messages) {
        PubSub.publish('MessagesUpdate', messages);
    }


    /**
     * Bind the vars from inputs to the state object
     */
    handleChange({target}) {
        this.setState({
            [target.name]: target.value
        });
    }

    /**
     * Stringify the data and save it to the local storage
     * Display the message
     */
    processValidData() {
        let registrationData = JSON.stringify(this.state);
        localStorage.setItem("registrationData", registrationData);
        this.displayMessages(['Form data valid']);
    }

}
