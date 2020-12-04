
export default class PassportField{
    constructor(name, isRequired, validator){
        this.name = name;
        this.isRequired = isRequired;
        this.value = undefined;
        this.validator = validator;
    }
    
    valueIsValid = () => this.validator === undefined || this.validator.isValid(this.value);
}