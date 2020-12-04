import PassportField from "./passportField.js";
import Validator, { measurementIsValid, numberIsValid, textIsValid } from "./validator.js";

export default class Passport {
    static eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

    constructor(){
        this.fields = [
            new PassportField('byr', true, new Validator(numberIsValid, {
                min: 1920,
                max: 2002
            })),
            new PassportField('iyr', true, new Validator(numberIsValid, {
                min: 2010, 
                max: 2020
            })),
            new PassportField('eyr', true, new Validator(numberIsValid, {
                min: 2020, 
                max: 2030
            })),
            new PassportField('hgt', true, new Validator(measurementIsValid, {
                cm: {
                    min: 150,
                    max: 193
                },
                in: {
                    min: 59,
                    max: 76
                }
            })),
            new PassportField('hcl', true, new Validator(textIsValid, {
                regEx: /^#[0-9a-f]{6}$/g
            })),
            new PassportField('ecl', true, new Validator(textIsValid, {
                regEx: new RegExp(`^${Passport.eyeColors.join('|')}$`, 'g')
            })),
            new PassportField('pid', true, new Validator(textIsValid, {
                regEx: /^\d{9}$/g
            })),
            new PassportField('cid', false)
        ]
    }    

    hasAllRequiredFields = () => this.fields
        .filter(f => f.isRequired && f.value === undefined).length === 0;
        
    valuesAreValid = () => this.fields.filter(f => f.valueIsValid()).length === this.fields.length;
}


