import Validator from './Validator.jsx';

export default class DigitsOnlyValidator extends Validator {

    getErrorMessage() {
        return  `${this.label} can contain only digits [0-9]`;
    }

    validate(value) {
        let regex = /^[0-9]+$/;
        return regex.test(value);
    }

}
