import {day06} from '../data.js';

const getUniqueLetters = () => day06.reduce((acc, sequence) => {
    const sequenceIsBlank = sequence === '';

    if(acc.length === 0 || sequenceIsBlank){
        acc.push([]);
    }

    if(!sequenceIsBlank){
        let uniqueLetters = acc[acc.length - 1];

        if(uniqueLetters.length === 0){
            uniqueLetters.push(...sequence);
        } else {
            [...sequence].forEach(letter => {
                if(!uniqueLetters.includes(letter)){
                    uniqueLetters.push(letter);
                }
            });
        }
    }

    return acc;
}, []);

const solution1 = () => getUniqueLetters().map(letters => letters.length)
    .reduce((acc, length) => acc + length);

console.log(solution1());