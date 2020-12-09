import {day03 as puzzleData} from '../data.js';

const isTree = (x, y) => puzzleData[y][x] === '#';
const isEndOfMap = (y) => y === puzzleData.length - 1;  

const countTrees = (xStep, yStep) => {
    let xPos = 0, yPos = 0, treeCount = 0;

    while(!isEndOfMap(yPos)){
        xPos += xStep;
        yPos += yStep;

        let xIndex = xPos % puzzleData[yPos].length;
        treeCount += isTree(xIndex, yPos) ? 1 : 0;      
    }

    return treeCount;
}

const solution1 = () => countTrees(3, 1);
const solution2 = () => countTrees(1, 1) * solution1() * countTrees(5, 1) * countTrees(7, 1) * countTrees(1, 2);

console.log(solution1());
console.log(solution2());