"use strict";
let num1 = 23.0;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b11001;
console.log('Number - Ponto Flutuante', num1);
console.log(typeof (num1));
console.log('Number - Hexadecimal', num2);
console.log(typeof (num2));
console.log('Number - Octal', num3);
console.log(typeof (num3));
console.log('Number - Binário', num4);
console.log(typeof (num4));
let big1 = 34043909549054n;
let big2 = 36028797018963971n;
let big3 = 9223372036854775807n;
let big4 = 0x7ffffffffffffn;
console.log('Bigint - Decimal', big1);
console.log(typeof (big1));
console.log('Bigint - Binário', big2);
console.log(typeof (big2));
console.log('Bigint - Octal', big3);
console.log(typeof (big3));
console.log('Bigint - Hexadecimal', big4);
console.log(typeof (big4));
