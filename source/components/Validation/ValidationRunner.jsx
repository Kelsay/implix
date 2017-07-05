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
        let results = [];
        for (let rule of this.rules) {

            // Destructure the rules
            let field, value, validators;
            [field, ...validators] = rule;
            value = this.state[field];

            for (let validator of validators) {
                results.push(validator.validate(value));
            }
        }

        return results;
    }

}
