import { day04 } from '../data.js';
import crypto from 'crypto-js';

function problem01(){
    return '00000'
}

function problem02(){
    return '000000';
}

function problemSolver(subStr){
    let MD5 = 'ABCDE';
    let number = -1;

    while(MD5.substr(0, subStr().length) !== subStr()){
        number++;
        MD5 = crypto.MD5(day04 + number.toString()).toString();
    }

    return number;
}

console.log(problemSolver(problem01));
console.log(problemSolver(problem02));