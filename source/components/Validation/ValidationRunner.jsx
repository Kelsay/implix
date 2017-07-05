/**
 * Runs the validations and return error messages
 */

export default class ValidationRunner {

    constructor(rules, state) {
        this.rules = rules;
        this.state = state;
    }

    /**
     * Execute all the validation rules
     * @returns {Array} Array of error messages
     */
    execute() {
        let errors = [];
        for (let rule of this.rules) {

            // Destructure the rules
            let field, label, value, validators;
            [field, label, ...validators] = rule;
            value = this.state[field];

            for (let validator of validators) {
                if (!validator.validate(value)) {
                    errors.push(validator.getErrorMessage());
                }
            }
        }

        return errors;
    }

}
