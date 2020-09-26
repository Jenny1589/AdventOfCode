import { day01 } from '../data.js';

function problem01(){
    let floor = 0;

    day01.split('').forEach(c => {
        floor += c == '(' ? 1 : -1;
    });

    return floor;
}

console.log(problem01());

function problem02(){
    let floor = 0;
    let pos = 0;
    let instructions = day01.split('');

    while(floor != -1 && pos++ < instructions.length){
        floor += instructions[pos - 1]  == '(' ? 1 : -1;
    }

    return pos;
}

console.log(problem02());
