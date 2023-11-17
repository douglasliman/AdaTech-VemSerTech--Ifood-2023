/*
2. **Exercício Moderado**:
Escreva um programa em JavaScript que verifica se um número é 
 ou ímpar. Use a estrutura `if-else` para realizar essa verificação.
*/  

function parOuImpar(numero) {
    
    if (numero % 2 == 0){
        console.log(`${numero} é Par`)
        } else{
        console.log(`${numero} é Impar`)
    }
}

let numero = 4

parOuImpar(numero);


console.log((numero%2==0)? `${numero} é Par`: `${numero} é Impar`);
