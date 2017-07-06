import Validator from './Validator.jsx';

export default class NoNumbersValidator extends Validator {

    getErrorMessage() {
        return  `${this.label} cannot contain numbers [0-9]`;
    }

    validate(value) {
        let regex = /^([^0-9]*)$/;
        return !regex.test(value);
    }

}
