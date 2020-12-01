import { day01 } from '../data.js';

const puzzleData = day01.split(';')
    .map(data => Number.parseInt(data));

const solution1 = () => {
    let pos = 0;

    while(pos < puzzleData.length && !sumIs2020){
        var index = pos + 1;

        while(index < puzzleData.length && !sumIs2020){
            var sumIs2020 = puzzleData[pos] + puzzleData[index] === 2020;

            index += sumIs2020 ? 0 : 1;
        }

        pos += sumIs2020 ? 0 : 1;
    }

    return puzzleData[pos] * puzzleData[index];
}

const problem2 = 

console.log(solution1());