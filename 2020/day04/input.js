
export default class Input{
    constructor(name, isRequired, regExp){
        this.name = name;
        this.isRequired = isRequired;
        this.regExp = regExp;
    }
    
    valueIsValid = (value) => this.regExp === undefined || this.regExp.test(value);
}