import { day06 } from '../data.js';

let lights = [];
function initialize(){ 
    for(let y = 0; y < 1000; y++){
        lights[y] = [];
        for(let x = 0; x < 1000; x++){
            lights[y][x] = false;
        }
    }
}

function Coordinate(x, y){
    this.x = x;
    this.y = y;
}

function Instruction(action, start, end){
    this.action = action;
    this.start = start;
    this.end = end;
}

function readInstructions(){
    return day06.split(';')
        .map(i => i.split(' ')
            .filter(w => w !== 'turn' && w !== 'through')
            .map((w, index) => {
                if(index !== 0){
                    let values = w.split(',');
                    return new Coordinate(Number.parseInt(values[0]), Number.parseInt(values[1]));
                }
                return w;
            }
        )
    ).map(i => new Instruction(i[0], i[1], i[2]));
}

let actions01 = {
    on: function(state){
        return true;
    },
    off: function(state){
        return false;
    },
    toggle: function(state){
        return !state;
    }
}

function executeInstructions(actions){
    let instructions = readInstructions();
    instructions.forEach(i => {
        for (let y = i.start.y; y <= i.end.y; y++) {
            for ( let x = i.start.x; x <= i.end.x; x++){
                lights[y][x] = actions[i.action](lights[y][x]);
            }
        }
    });
}

function countGlowingLights() {
    return lights.reduce((acc, row) => 
            acc + row.reduce((acc2, light) => {
                return acc2 + light;
            }, 0)
        ,0);
}

function problem01() {
    initialize();
    executeInstructions(actions01);
    console.log(countGlowingLights()); 
}

problem01();

// First guess 418954 was too high