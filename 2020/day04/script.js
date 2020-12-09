import {day04} from '../data.js'
import Passport from './passport.js';

const puzzleData = day04.reduce((passportList, line) => {
    const lineIsBlank = line === '';

    if(passportList.length === 0 || lineIsBlank){
        passportList.push(new Passport());
    }

    if(!lineIsBlank){
        const info = line.split(/[:\s]/g);
        const passportIndex = passportList.length - 1;

        for(let i = 0; i < info.length; i += 2){
            const passport = passportList[passportIndex];
            const fieldName = info[i];
            
            const fieldVal = info[i + 1];
            passport.addInformation(fieldName, fieldVal);
        }
    }
    return passportList;
}, []);

const solution1 = () => puzzleData.filter(passport => passport.hasAllRequiredFields()).length;
const solution2 = () => puzzleData.filter(passport => passport.hasAllRequiredFields() && passport.valuesAreValid()).length;

console.log(solution1());
console.log(solution2());