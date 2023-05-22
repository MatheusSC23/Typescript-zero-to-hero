let frutas:string[] = ['abacaxi', 'banana', 'manga', 'uva', 'pera', 'maçã', 'laranja'];
console.log(frutas[0]);

let frutas2:Array<string> = ['abacaxi', 'banana', 'manga', 'uva', 'pera', 'maçã', 'laranja'];
console.log(frutas2[4]);

let idiomas:Array<string> =['Português', 'Inglês', 'Espanhol', 'Francês', 'Alemão', 'Italiano'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);

let listaNumeros = [1,2,3,4,5];

listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);


let linguagensProg: string[] = new Array('Python', 'Java', 'C#', 'C++', 'C', 'JavaScript', 'PHP', 'Ruby', 'Go');
console.log(linguagensProg);

function funcaoLinguagens(linguagens:string[]){
    for (let index = 0; index < linguagens.length; index++) {
       console.log(linguagens[index])
    }
}

funcaoLinguagens(linguagensProg)