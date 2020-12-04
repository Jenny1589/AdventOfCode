import {day04} from '../data.js'

const puzzleData = day04.split('\r\n')
    .reduce((passportList, line) => {
        const lineIsBlank = line === '';

        if(passportList.length === 0 || lineIsBlank){
            passportList.push({});
        }

        if(!lineIsBlank){
            const info = (line.split(/[:\s]/g));
            const passportIndex = passportList.length - 1;

            for(let i = 0; i < info.length; i += 2){
                const passport = passportList[passportIndex];
                const field = info[i];
                const fieldVal = info[i + 1];

                passport[field] = fieldVal;
            }
        }

        return passportList;
    }, []);

const solution1 = () => {
    const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

    return puzzleData.reduce((validCounter, passport) => {
        for(const field of requiredFields){
            if(passport[field] === undefined) {
                return validCounter;
            }
        }
        return ++validCounter;
    }, 0);
}

console.log(solution1());