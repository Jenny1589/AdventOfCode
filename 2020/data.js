import fs from 'fs';

const convertFileToArrayOfStrings = (filePath) => fs.readFileSync(filePath).toString().split('\r\n');

export let
    day01 = convertFileToArrayOfStrings('../files/day01_puzzleData.txt'),
    day02 = convertFileToArrayOfStrings('../files/day02_puzzleData.txt'),
    day03 = convertFileToArrayOfStrings('../files/day03_puzzleData.txt'),
    day04 = convertFileToArrayOfStrings('../files/day04_puzzleData.txt'),
    day05 = convertFileToArrayOfStrings('../files/day05_puzzleData.txt'),
    day06 = convertFileToArrayOfStrings('../files/day06_puzzleData.txt'),
    day07 = convertFileToArrayOfStrings('../files/day07_puzzleData.txt'),
    day08 = convertFileToArrayOfStrings('../files/day08_puzzleData.txt'),
    day09 = convertFileToArrayOfStrings('../files/day09_puzzleData.txt');


