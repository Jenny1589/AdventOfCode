import {day08} from '../data.js';

let accumulator = 0;
let operationToExcecute = 0;
let isSuccess = false;

function Operation(name, value){
    this.name = name;
    this.value = value;
    this.isExecuted = false;
}

Operation.prototype.execute = function() {
    this[this.name]();
    this.isExecuted = true;
}

Operation.prototype.acc = function(){
    accumulator += this.value;
    operationToExcecute++;
}

Operation.prototype.jmp = function() {
    operationToExcecute += this.value;
}

Operation.prototype.nop = function() {
    operationToExcecute++;
}

let operations = day08.map(i =>{
    const op = i.split(' ');    
    return new Operation(op[0], Number.parseInt(op[1]));
});

const reset = () => {
    accumulator = 0;
    operationToExcecute = 0;
    isSuccess = false;

    for(let op of operations) op.isExecuted = false;
}

const run = (program) => {    
    reset();

    let op = program[operationToExcecute];

    while(op !== undefined && !op.isExecuted){        
        op.execute();
        op = program[operationToExcecute];
    }

    isSuccess = op === undefined;
}

const solution1 = () => {    
    run(operations);
    return accumulator;
}

const solution2 = () => {
    let operationsToSwitch = operations.filter(o => o.name === 'jmp' || o.name === 'nop');
    let index = 0;

    while(!isSuccess && index < operationsToSwitch.length){
        let switchOp = operationsToSwitch[index];
        let switchOpIndex = operations.findIndex(o => o === switchOp); 

        let newOpName = switchOp.name === 'jmp' ? 'nop' : 'jmp';
        let newOp = new Operation(newOpName, switchOp.value);

        let program = [...operations];
        program.splice(switchOpIndex, 1, newOp);

        run(program);
        index++;
    }

    return accumulator;
}

console.log(solution1());
console.log(solution2());