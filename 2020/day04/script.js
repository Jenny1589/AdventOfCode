import {day04} from '../data.js'
import Passport from './passport.js';

const puzzleData = day04.split('\r\n')
    .reduce((passportList, line) => {
        const lineIsBlank = line === '';

        if(passportList.length === 0 || lineIsBlank){
            passportList.push(new Passport());
        }

        if(!lineIsBlank){
            const info = (line.split(/[:\s]/g));
            const passportIndex = passportList.length - 1;

            for(let i = 0; i < info.length; i += 2){
                const passport = passportList[passportIndex];
                const fieldName = info[i];
                const field = passport.fields.find(f => f.name === fieldName);
                
                const fieldVal = info[i + 1];
                field.value = fieldVal;
            }
        }

        return passportList;
    }, []);

const solution1 = () => puzzleData.filter(passport => passport.hasAllRequiredFields()).length;

console.log(solution1());