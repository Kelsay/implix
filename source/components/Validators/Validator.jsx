export default class Validator {

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
