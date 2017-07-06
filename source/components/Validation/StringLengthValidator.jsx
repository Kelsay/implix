import Validator from './Validator.jsx';

export default class StringLengthValidator extends Validator {

    constructor({min = 1, max = 255} = {}) {
        super();
        this.min = min;
        this.max = max;
    }

    getErrorMessage() {
        return `${this.label} must be between ${this.min} and ${this.max} characters`;
    }

    validate(value) {
        return (value.length && value.length >= this.min && value.length <= this.max);
    }

}
