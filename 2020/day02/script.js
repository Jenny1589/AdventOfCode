import { day02 } from '../data.js';

const puzzleData = day02.map(line => {
    let data = line.split(/:?[-\s]/);

    return {
        val1: Number.parseInt(data[0]),
        val2: Number.parseInt(data[1]),
        letter: data[2],
        password: data[3]
    }
});

const isValid1 = ({password, letter, val1, val2}) => {    
    const regEx = new RegExp(`[${letter}]`, 'g');
    const matches = password.match(regEx);
    const nbrReps = matches === null ? 0 : matches.length;

    return nbrReps >= val1 && nbrReps <= val2;
}

const isValid2 = ({password, letter, val1, val2}) => {
    const isAMatch = (val) => password[val - 1] === letter;

    return  isAMatch(val1) ? !isAMatch(val2) : isAMatch(val2);                    
}

const solution = (isValid) => puzzleData.reduce((acc, data) => isValid(data) ? acc + 1 : acc, 0);

const solution1 = () => solution(isValid1);
const solution2 = () => solution(isValid2);

console.log(solution1());
console.log(solution2());
