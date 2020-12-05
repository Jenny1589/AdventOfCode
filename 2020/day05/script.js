import {day05} from '../data.js';

const totRows = 128;
const totSeats = 8;

function binarySearch(min, max, serial){   
    if(serial === '') return min;

    const lowerHalf = ['F', 'L'];
    const upperHalf = ['B', 'R'];
    const step = (max - min) / 2;
    
    if(lowerHalf.includes(serial[0])) return binarySearch(min, Math.floor(max - step), serial.substr(1));
    if(upperHalf.includes(serial[0])) return binarySearch(Math.ceil(min + step), max, serial.substr(1));
}

const puzzleData = day05.map(s => {
    return {
        row: binarySearch(0, totRows - 1, s.substr(0, 7)), 
        seat: binarySearch(0, totSeats - 1, s.substr(7, 3)),
        getId() {
            return this.row * 8 + this.seat;
        } 
    }
});

const solution1 = () => Math.max(...puzzleData.map(d => d.getId()));

console.log(solution1());



