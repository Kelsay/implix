import Validator from './Validator.jsx';
import ErrorMessages from '../../resources/strings/ErrorMessages.jsx';


export default class NotEmptyValidator extends Validator {

    getErrorMessage() {
        return `${this.label} cannot be empty`;
    }

    validate(value) {
        return (value !== null && value !== "");
    }

}
