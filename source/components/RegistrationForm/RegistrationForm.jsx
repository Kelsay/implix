import React from 'react';
import ValidationRunner from '../Validation/ValidationRunner.jsx';
import NotEmptyValidator from '../Validation/NotEmptyValidator.jsx';

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
            ['email', new NotEmptyValidator()],
            ['firstName', new NotEmptyValidator()]
        ];
    }

    /**
     * Set default state
     */
    setupState() {
        this.state = {
            firstName: "",
            email: ""
        };
    }

    render() {
        return (
            <div className="registrationForm">
                <form>
                    <input type="radio" name="1_ticket"/> 1 TICKET €109
                    <input type="radio" name="5_tickets"/> 5 TICKETS €495

                    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange}/>
                    <input type="text" value="first_name" name="last_name"/>

                    <textarea name="textarea_1"></textarea>
                    <textarea name="textarea_2">2</textarea>

                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="password" name="password" value="password"/>

                    <input type="text" name="vid_number" value="vid_number"/>
                    <input type="text" name="tickets_count" value="tickets_count"/>

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
     *
     */
    handleChange({target}) {
        this.setState({
            [target.name]: target.value
        });
    }

}
