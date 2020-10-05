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

function calcEncodedChars(codeString){
    let chars = 2;

    codeString.split('').forEach(c => {
        if(c === '\"' || c === '\\') chars += 2;
        else chars++;
    });

    return chars;
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

function problem02(){
    let charsOfCode = 0;
    let encodedChars = 0;

    strings.forEach(s => {
        charsOfCode += s.length;
        encodedChars += calcEncodedChars(s);
    });

    console.log(encodedChars - charsOfCode);
}

problem01();
problem02();



