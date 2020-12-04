import PassportField from "./passportField.js";

export default class Passport {
    constructor(){
        this.fields = [
            new PassportField('byr', true),
            new PassportField('iyr', true),
            new PassportField('eyr', true),
            new PassportField('hgt', true),
            new PassportField('hcl', true),
            new PassportField('ecl', true),
            new PassportField('pid', true),
            new PassportField('cid', false)
        ]
    }    

    hasAllRequiredFields = () => this.fields
        .filter(f => f.isRequired && f.value === undefined).length === 0;   
}

