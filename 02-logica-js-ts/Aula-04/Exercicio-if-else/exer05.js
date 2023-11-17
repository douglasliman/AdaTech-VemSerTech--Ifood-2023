/*
5. **Exercício Desafiador:**
Escreva um programa em JavaScript que verifica se um número é um *palíndromo*.
 Use a estrutura `if-else` para realizar essa verificação. Um *palíndromo* é um 
 número que permanece o mesmo quando seus dígitos são invertidos.


**Dica:** para inverter um numero utilize: `parseInt(numero.toString().split('').reverse().join(''))`
*/

function isPalindrome(number) {

    let reversedNumber = parseInt(number.toString().split('').reverse().join(''));

    if (reversedNumber == number){
        return console.log("é palindromo");
    } else{
        return console.log(("nao é palindromo"));
    }
}

let number = 424;

isPalindrome(number);
