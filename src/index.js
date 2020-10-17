const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********':' ',

};

function decode(expr) {
    let arr=[];
    for(let i=0;i<expr.length;i+=10){
        arr.push(expr.slice(i,i+10));
    }

    arr=arr.map(element=> {
        let subArray=[];
        for(let i=0;i<expr.length;i+=2){
            let item=element.slice(i,i+2);
            switch(item){
                case '10': {
                    subArray.push('.');
                    break;}
                    case '11': {
                        subArray.push('-');
                        break;} 
                    case '**': {
                        subArray.push('**');
                        break;}        
            }
        }        
        return MORSE_TABLE[subArray.join('')];
        });
    return arr.join('');
   
}

module.exports = {
    decode
}