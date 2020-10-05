import { day08 } from '../data.js';

let strings = day08.split(';');

function calcCharsInMem(codeString){
    let memChars = codeString.length;

    for(let i = 0; i < codeString.length; i++){
        switch(codeString.charAt(i)){
            case '"': memChars--;
            break;

            case '\\': 
            if(codeString.charAt(i + 1) !== 'x'){
                memChars -= 1;
                i++;
            }else{
                memChars -= 3;
                i += 3;
            }
            break;
        }
    }

    return memChars;
}

function problem01(){
    let charsOfCode = 0;
    let charsInMem = 0;

    strings.forEach(s => {
        charsOfCode += s.length;
        charsInMem += calcCharsInMem(s);
    });
    
    console.log(charsOfCode - charsInMem);
}

problem01();


