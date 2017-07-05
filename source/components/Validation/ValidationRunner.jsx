/**
 * Runs the validations and return error messages
 */

export default class ValidationRunner {

    constructor(rules) {
        this.rules = rules;
    }

    execute() {
        console.log('Validators', this.rules);
        let error = false,
            messages = [];
        for (let rule of this.rules) {
            let value, validators;
            [value, ...validators] = rule;
            console.log(value, validators);
        }

        return { error, messages };
    }

}
