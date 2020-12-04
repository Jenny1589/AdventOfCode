export default class Validator{
    constructor(validationFunc, settings){
        this.settings = settings;
        this.isValid = (value) => validationFunc(value, this.settings);
    }
}

export function numberIsValid(value, {min, max}){    
    let number = Number.parseInt(value);
    return number >= min && number <= max;
}

export function textIsValid(value, {regEx}){
    return [...value.matchAll(regEx)].length === 1;
}

export function measurementIsValid(value, settings){
    const units = Object.keys(settings);
    const regEx = new RegExp(`^(\\d+)(${units.join('|')})$`, 'g');
    const matches = [...value.matchAll(regEx)];
    const match = matches[0];

    return match === undefined ? false : numberIsValid(match[1], settings[match[2]]);
}