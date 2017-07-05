import React from 'react';

// Models
import RegistrationDataModel from './RegistrationDataModel.jsx';

// Validations
import ValidationRunner from '../Validation/ValidationRunner.jsx';
import NotEmptyValidator from '../Validation/NotEmptyValidator.jsx';
import EmailValidator from '../Validation/EmailValidator.jsx';

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
            ['email', 'E-mail', new NotEmptyValidator(), new EmailValidator()],
            ['firstName', 'First name', new NotEmptyValidator()],
            ['lastName', 'Last name', new NotEmptyValidator()]
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
            <div className="registrationForm">

                <h2>Weekend promotion</h2>
                <h3>Promotion ends: 20.03.2014, 12:00PM</h3>
                <form>
                    <input type="radio" name="1_ticket"/> 1 TICKET €109
                    <input type="radio" name="5_tickets"/> 5 TICKETS €495

                    <input name="firstName" type="text" value={state.firstName} onChange={this.handleChange}/>
                    <input name="lastName" type="text" value={state.lastName} onChange={this.handleChange}/>

                    <textarea name="textarea1" value={state.textarea1} onChange={this.handleChange}></textarea>
                    <textarea name="textarea2" value={state.textarea2} onChange={this.handleChange}></textarea>

                    <input name="email" type="text" value={state.email} onChange={this.handleChange}/>
                    <input name="password" type="password" value={state.password} onChange={this.handleChange}/>

                    <input name="vidNumber" type="text" value={state.vidNumber}/>
                    <input name="ticketCount" type="text" value={state.ticketCount}/>

                    <button onClick={this.handleSubmit}>Register</button>
                </form>
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
        console.log(result);
    }

    /**
     * Assign the
     */
    handleChange({target}) {
        this.setState({
            [target.name]: target.value
        });
    }

}
