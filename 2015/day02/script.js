import { day02 } from '../data.js';

let dimensions = day02.split(',')
    .map(d => d.split('x'));
    
function problem01(){
    return dimensions.map(d => {
        let areas = [d[0]*d[1], d[1]*d[2], d[0]*d[2]]; 
        let extra = Math.min(...areas);

        return areas.reduce((acc, current) => acc + 2*current, 0) + extra;
    }).reduce((acc, current) => acc + current);
}

console.log(problem01());

function problem02(){
    return dimensions.map(d => {
        d = d.sort((a, b) => a - b);
        return d[0] * 2 + d[1] * 2 + d[0] * d[1] * d[2];
    }).reduce((acc, current) => acc + current);
}

console.log(problem02());