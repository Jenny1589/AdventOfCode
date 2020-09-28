import { day05 } from '../data.js';

function problem01(){
    let threeVowls = /(\w*[aeiou]\w*){3}/;
    let douplicateLetter = /(.)\1/;
    let forbiddenWords = /(ab)*(cd)*(pq)*(xy)*/g;

    function isNiceString(word){
        let hasThreeVouls = word.match(threeVowls) !== null;
        let hasDouplicateLetter = word.match(douplicateLetter) !== null
        let hasForbiddenWord = word.match(forbiddenWords).filter(m => m !== '').length > 0;

        return  hasThreeVouls && hasDouplicateLetter && !hasForbiddenWord;
    }

    return day05.split(',').reduce((niceString, s) => {
        return isNiceString(s) ? niceString + 1 : niceString;
    }, 0);
}

console.log(problem01());

function problem02(){
    function hasRepeatedPair(word){
        let pairs = [];
        let pairFound = false;
        let index = 0;

        while(index < word.length - 1 && !pairFound){
            let combo2Lt = word.substr(index, 2);
            let i = index;

            while(--i >= 0 && !pairFound){
                pairFound = i !== pairs.length - 1 && pairs[i] === combo2Lt;
            }

            if(!pairFound) pairs.push(combo2Lt);

            index++;
        }

        return pairFound;
    }

    function hasRepeatedLetter(word){
        let letters = word.split('');
        let repeatFound = false;
        let index = -1;

        while(++index < word.length - 2 && !repeatFound){       
            repeatFound = letters[index] === letters[index + 2];
        }

        return repeatFound;
    }

    return day05.split(',')
        .filter(s => hasRepeatedPair(s) && hasRepeatedLetter(s))
        .length;
}

console.log(problem02());