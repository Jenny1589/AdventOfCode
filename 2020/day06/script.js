import {day06} from '../data.js';

const answerGroups = day06.reduce((acc, sequence) => {
    const sequenceIsBlank = sequence === '';

    if(acc.length === 0 || sequenceIsBlank) acc.push([]);
    
    if(!sequenceIsBlank) acc[acc.length - 1].push(sequence);

    return acc;
}, []);

const getAnswers = (filter) => answerGroups.map(group =>
    group.reduce((acc, answers, index) => {
        if(index === 0) acc.push(...answers);
        else acc = filter(acc, answers);

        return acc;
    }, [])
);

const unique = (uniqueAnswers, answers) => {
    [...answers].forEach(answer => {
        if(!uniqueAnswers.includes(answer)){
            uniqueAnswers.push(answer);
        }
    });

    return uniqueAnswers;
}

const common = (commonAnswers, answers) => {
    if(commonAnswers.length !== 0){
        let answersArr = [...answers];
        commonAnswers.forEach((answer, index) => {
            if(!answersArr.includes(answer)){
                commonAnswers.splice(index, 1, '');
            }
        });
    }

    return commonAnswers.filter(answer => answer !== '');
}

const solution = (filter) => getAnswers(filter).map(answers => answers.length)
    .reduce((acc, count) => acc + count);

const solution1 = () => solution(unique);
const solution2 = () => solution(common);

console.log(solution1());
console.log(solution2());