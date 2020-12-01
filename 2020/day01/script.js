import { day01 } from '../data.js';

const puzzleData = day01.split(';')
    .map(data => Number.parseInt(data));

const solution1 = (sum) => {

    for(const data of puzzleData){
        const diff = sum - data;

        if(puzzleData.includes(diff)) return data * diff;
    }

    return NaN;
}

const solution2 = (sum) => {
    for(const data of puzzleData){
        const diff = sum - data;

        const result = solution1(diff);

        if(!isNaN(result)) return data * result;
    }
}

console.log(solution1(2020));
console.log(solution2(2020));