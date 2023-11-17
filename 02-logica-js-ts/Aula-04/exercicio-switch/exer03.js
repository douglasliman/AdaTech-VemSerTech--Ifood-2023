/*
Exercício Intermediário:

Escreva um programa em JavaScript que recebe uma letra do alfabeto e retorna se
 é uma vogal ou uma consoante.  Utilize a estrutura switch/case para realizar essa 
 verificação.

*/
let letras = ['A', 'E', 'I', 'O', 'U'];
letra.toLowerCase();
function verificaVogal(letra){
    switch (letra) {
        case "A":
            console.log('A é uma vogal');
            break;
        case "E":
            console.log('E é uma vogal');
            break;
        case "I":
            console.log('I é uma vogal');
            break;
        case "O":
            console.log('O é uma vogal');
            break;
        case "U":
            console.log('U é uma vogal');
            break;
         default :
         console.log(`${letra} é uma consoante`);
    }
}
verificaVogal("B");
verificaVogal("E");


const vogais = ["A", "E", "I", "O", "U"];
function verificaLetras(letra){
    if(vogais.includes(letra)){
        return `${letra} é uma vogal`;
    }else{
        return `${letra} é uma consoante`;
    }
}




            
