import Validator from './Validator.jsx';

export default class EmailValidator extends Validator {

    validate(value) {
        // W3C regex used in browser built-in validation for field type 'email'
        let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return regex.test(value);
    }

    getErrorMessage() {
        return "This is not a valid email address";
    }

}
