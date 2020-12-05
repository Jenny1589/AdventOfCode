import Input from "./input.js";

export default class Passport {

    static fields = [
        new Input('byr', true, /^19[2-9]\d|200[0-2]$/),
        new Input('iyr', true, /^201\d|2020$/),
        new Input('eyr', true, /^202\d|2030$/),
        new Input('hgt', true, /^1[5-8]\dcm|19[0-3]cm|59in|6\din|7[0-6]in$/),
        new Input('hcl', true, /^#[\da-f]{6}$/),
        new Input('ecl', true, /^amb|blu|brn|gry|grn|hzl|oth$/),
        new Input('pid', true, /^\d{9}$/),
        new Input('cid', false)
    ];
    
    addInformation = (key, value) => this[key] = value;

    hasAllRequiredFields = () => Passport.fields.filter(f => f.isRequired && this[f.name] === undefined).length === 0;
        
    valuesAreValid = () => Passport.fields.filter(f => !f.valueIsValid(this[f.name])).length === 0;
}


