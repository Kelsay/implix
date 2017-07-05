import Validator from './Validator.jsx';
import ErrorMessages from '../../resources/strings/ErrorMessages.jsx';


export default class NotEmptyValidator extends Validator {

    getErrorMessage() {
        return ErrorMessages.empty;
    }

    validate(value) {
        console.log(this.name, value);
        return true;
    }

}
