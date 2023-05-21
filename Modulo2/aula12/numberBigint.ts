let num1 : number = 23.0;
let num2 : number = 0x78CF;
let num3 : number = 0o577;
let num4 : number = 0b11001;

console.log('Number - Ponto Flutuante',num1);
console.log(typeof(num1));
console.log('Number - Hexadecimal',num2);
console.log(typeof(num2));

console.log('Number - Octal',num3);
console.log(typeof(num3));

console.log('Number - Binário',num4);
console.log(typeof(num4));


let big1: bigint = 34043909549054n;
let big2: bigint = 0b10000000000000000000000000000000000000000000000000000011n;
let big3: bigint = 0o777777777777777777777n;
let big4: bigint = 0x7ffffffffffffn;

console.log('Bigint - Decimal',big1);
console.log(typeof(big1));
console.log('Bigint - Binário',big2);
console.log(typeof(big2));
console.log('Bigint - Octal',big3);
console.log(typeof(big3));
console.log('Bigint - Hexadecimal',big4);
console.log(typeof(big4));  
