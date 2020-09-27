import { day03 } from '../data.js'

function House(x, y){
    this.x = x;
    this.y = y;
}

House.prototype.equals = function(house) {
    return this.x === house.x && this.y === house.y;
}

const startPos = new House(0, 0);
let santaToMove, santaPos, robotPos, visitedHouses;

function initialize(){
    santaPos = new House(startPos.x, startPos.y);
    robotPos = new House(startPos.x, startPos.y);
    santaToMove = santaPos;
    visitedHouses = [new House(startPos.x, startPos.y)];
}

function moveSanta(instruction, position){
    switch(instruction){
        case '>':
            position.x++;
            break;
        case '<':
            position.x--;
            break;
        case '^':
            position.y--;
            break;
        case 'v':
            position.y++;
            break;
    }
}

function tryAddHouse(position){
    let house = visitedHouses.find(visited => visited.equals(position));
    if(house === undefined) {
        visitedHouses.push(new House(position.x, position.y));
    }
}

function problem01(){
    return santaPos;
}

function problem02(){  
    return santaToMove.equals(santaPos) ? robotPos : santaPos;
}

function problemSolver(santa){
    day03.split('').forEach(instruction => {
        santaToMove = santa();
        moveSanta(instruction, santaToMove);
        tryAddHouse(santaToMove);
    });

    return visitedHouses.length;
}

initialize();
console.log(problemSolver(problem01));

initialize();
console.log(problemSolver(problem02));
