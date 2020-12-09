import {day09} from '../data.js';

const puzzleData = day09.map(n => Number.parseInt(n));
const preambleLength = 25;

const isValidNumber = (number, preamble) => {
    for(const data of preamble){
        const diff = number - data;

        if(preamble.includes(diff)) return true;
    }

    return false;
} 

const solution1 = () => {
    for(let i = preambleLength; i < puzzleData.length; i++){
        const preamble = puzzleData.slice(i - preambleLength, i);
        const number = puzzleData[i];

        if(!isValidNumber(number, preamble)) return number; 
    }

    return NaN;
}

const solution2 = () => {
    const result = solution1();

    for(let i = 0; i < puzzleData.length; i++){
        const data = puzzleData[i];
        let sum = data;
        const terms = [data];
        let index = i + 1;

        while(sum < result){
            const number = puzzleData[index];
            sum += number
            terms.push(number);
            index++;
        }

        if(sum === result) return Math.max(...terms) + Math.min(...terms);
    }

    return NaN;
}

console.log(solution1());
console.log(solution2());
