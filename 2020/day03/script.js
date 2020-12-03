import {day03} from '../data.js'

const puzzleData = day03.split(';');

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

console.log(solution1());