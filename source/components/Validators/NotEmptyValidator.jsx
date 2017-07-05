import Validator from './Validator';


export default class NotEmptyValidator extends Validator {

    getErrorMessage() {
        return "This field cannot be empty."
    }

    validate(value) {
        console.log(value);
        return true;
    }

}