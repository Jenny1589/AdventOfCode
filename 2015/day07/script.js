import { day07 } from '../data.js'

function uint16(number){
    return number & 0xffff;
}

let op = {
    AND: function(inputs){
        return uint16(inputs[0] & inputs[1]);
    },
    OR: function(inputs){
        return uint16(inputs[0] | inputs[1]);
    },
    RSHIFT: function(inputs){
        return uint16(inputs[0] >>> inputs[1]);
    },
    LSHIFT: function(inputs){
        return uint16(inputs[0] << inputs[1]);
    },
    NOT: function(inputs){
        return uint16(~inputs[0]);
    },
    NOP: function(inputs){
        return uint16(inputs[0]);
    }
}

let wires = {}

function Gate(inputs, output){
    this.operation = "NOP";
    this.inputs = inputs;
    this.output = output;
    this.hasSignal = function(){
        let signals = this.getSignals();

        return signals.filter(s => s === undefined).length === 0;
    }

    this.getSignals = function(){
        let signals = [];

        inputs.forEach((i, index) => {
            if(isNaN(Number.parseInt(i))){
                signals[index] = wires[i];
            }else{
                signals[index] = Number.parseInt(i);
            }
        });

        return signals;
    }
}

function problemSolver(bValue){
    let gates = day07.split(';')
    .map(i =>{
        let info = i.split(' ')
            .filter(w => w !== '->');

        let index = info.length - 1;
        let gate = new Gate([], info[index]);
        wires[info[index]] = undefined;

        if(gate.output === 'b' && bValue !== null){
            gate.inputs.push(bValue);
            index--;
        }else{
            gate.inputs.push(info[--index]);
        }        
        if (index > 0) {
            gate.operation = info[--index];
            if (index > 0) {
                gate.inputs.push(info[--index]);
                gate.inputs = gate.inputs.reverse();
            }
        }
        return gate;
    });

    while (gates.length) {
        gates.forEach(gate => {    
            if (gate.hasSignal()) {
                wires[gate.output] = op[gate.operation](gate.getSignals());
                gates.splice(gates.indexOf(gate), 1);
            }
        });
    }
}

function problem01(){    
    problemSolver(null);
}

function problem02(){
    problem01();
    problemSolver(wires['a']);
}

problem01();
console.log(wires['a']);
problem02();
console.log(wires['a']);
