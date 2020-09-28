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