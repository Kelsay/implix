import Validator from './Validator.jsx';

export default class PasswordValidator extends Validator {

    getErrorMessage() {
        return `${this.label} must contain at least 8 characters, including at least one letter, one digit and one special character`;
    }

    // Requirements:
    // At least one digit (?=.*\d) and
    // At least one letter (basic latin) (?=.*[A-Za-z]) and
    // At least one special character (?=.*[^A-Za-z0-9]) and
    // At least 8 characters in total

    validate(value) {
        let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,}$/;
        return regex.test(value);
    }
}
