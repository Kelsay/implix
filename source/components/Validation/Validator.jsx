/**
 * Base class for all validators
 * Ideally should implement an interface but it is JS ..
 */

export default class Validator {

    constructor() {
        this.name = "This field"; // Default value
    }

    setLabel(label) {
        this.label = label;
    }

    // Abstract
    getErrorMessage() {
        throw new Error("Method getErrorMessage is not implemented!");
    }

    // Abstract
    validate(value) {
        throw new Error("Method validate() is not implemented!");
    }


}
