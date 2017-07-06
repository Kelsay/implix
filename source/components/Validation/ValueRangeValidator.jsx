import Validator from './Validator.jsx';

export default class ValueRangeValidator extends Validator {

    constructor({min = 0, max = 255} = {}) {
        super();
        this.min = min;
        this.max = max;
    }

    getErrorMessage() {
        return `${this.label} value must be between ${this.min} and ${this.max}`;
    }

    validate(value) {
        return (value !== null && value >= this.min && value <= this.max);
    }

}
