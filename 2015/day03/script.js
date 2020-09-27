import { day03 } from '../data.js'

function House(x, y){
    this.x = x;
    this.y = y;
}

House.prototype.equals = function(house) {
    return this.x === house.x && this.y === house.y;
}

let santaPos = new House(0, 0);
let visitedHouses = [new House(santaPos.x, santaPos.y)];

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

function problem01(){
    day03.split('').forEach(instruction => {
        moveSanta(instruction, santaPos);
        let house = visitedHouses.find(visited => visited.equals(santaPos));
        if(house === undefined) {
            visitedHouses.push(new House(santaPos.x, santaPos.y));
        }
    });

    return visitedHouses.length;
}

console.log(problem01());
