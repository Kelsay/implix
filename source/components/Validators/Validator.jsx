export default class Validator {

    name = "Validator";
    errorMessage = "Validation error";

    constructor(name) {
        this.name = name;
    }

    validate() {
        throw new Error("Method validate() is not implemented!");
    }

    getErrorMessage() {
        throw new Error("Method getErrorMessage is not implemented!");
    }

}