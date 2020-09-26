import { day01 } from '../data.js';

function problem01(){
    let floor = 0;

    day01.split('').forEach(c => {
        floor += c == '(' ? 1 : -1;
    });

    return floor;
}

console.log(problem01());


