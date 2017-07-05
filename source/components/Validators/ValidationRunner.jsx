/**
 * Runs the validations and display error messages
 */

export default class ValidationRunner {

    validators = [];

    constructor(validators) {
        this.validators = validators;
    }

    validate() {
        console.log(this.validators);
        for (let validator in this.validators) {
            console.log(validator);
        }
    }

}