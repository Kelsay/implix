import React from 'react';
import NotEmptyValidator from '../Validators/NotEmptyValidator.jsx';

export default class RegistrationForm extends React.Component {

    constructor() {
        super();
        this.setupValidationRules();
    }

    render() {
        return (
            <div className="registrationForm">
                <form>
                    <input type="radio" name="1_ticket"/> 1 TICKET €109
                    <input type="radio" name="5_tickets"/> 5 TICKETS €495

                    <input type="text" value="first_name" name="first_name"/>
                    <input type="text" value="first_name" name="last_name"/>

                    <textarea name="textarea_1"></textarea>
                    <textarea name="textarea_2">2</textarea>

                    <input type="text" name="email" value="email"/>
                    <input type="password" name="password" value="password"/>

                    <input type="text" name="vid_number" value="vid_number"/>
                    <input type="text" name="tickets_count" value="tickets_count"/>

                    <button onClick={this.onSubmit} value="Register" />
                </form>


            </div>
        )
    }

    /**
     * Assign validation rules to the field values
     */
    setupValidationRules() {
        let validators = [
            ['email', NotEmptyValidator]
        ]
    }

    onSubmit() {
        console.log('On submit');
    }

}

