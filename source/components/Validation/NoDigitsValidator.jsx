import Validator from './Validator.jsx';

export default class NoDigitsValidator extends Validator {

    getErrorMessage() {
        return  `${this.label} cannot contain numbers [0-9]`;
    }

    validate(value) {
        let regex = /^([^0-9]*)$/;
        return (value === null) ?
            false :
            regex.test(value);
    }

}
