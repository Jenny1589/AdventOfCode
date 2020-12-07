import {day07} from '../data.js'

function Bag(color, content){
    this.color = color;
    this.content = content;
}

Bag.prototype.canContain = function(bag){
    return this.content.some(group => group !== undefined && group.bag === bag);
}

function BagGroup(bag, count){
    this.bag = bag;
    this.count = count;
}

let bags = [];
const getBag = (color) => bags.find(b => b.color === color);

function initialize(){
    bags = day07.map(rule => new Bag(rule.split(' bags ')[0]));    

    day07.forEach(rule => {
        const bag = getBag(rule.split(' bags ')[0]);
        bag.content = rule.split(' contain ')[1]
            .split(/\sbags?[,\.]\s?/g)
            .filter(c => c !== '')
            .map(c => {
                const bag = getBag(c.substr(2));
                return bag === undefined ? undefined : new BagGroup(bag, Number.parseInt(c[0]));
            })                   
    });
}

initialize();

const shinyGoldBag = getBag('shiny gold');

const solution1 = () => {    
    const queue = [];
    const canContainShinyGoldBag = [];

    function enqueueBag(bag){
        bags.forEach(b => {
            if(b.canContain(bag)){
                queue.push(b);
            }
        });
    }
    
    enqueueBag(shinyGoldBag);

    while(queue.length > 0){
        const bag = queue.pop();
        if(!canContainShinyGoldBag.includes(bag)) canContainShinyGoldBag.push(bag);

        enqueueBag(bag);
    }

    return canContainShinyGoldBag.length;
}

const solution2 = () => {
    function countBagsInContent(bag){
        if(bag.content[0] === undefined) return 0;

        let bagsInContent = bag.content.reduce((acc, group) => acc + group.count, 0);

        bag.content.forEach(group => {
            bagsInContent += group.count * countBagsInContent(group.bag);
        });

        return bagsInContent;
    }

    return countBagsInContent(shinyGoldBag);
}

console.log(solution1());
console.log(solution2());