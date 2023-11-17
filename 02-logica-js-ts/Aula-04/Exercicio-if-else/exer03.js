/*
3. **Exercício Intermediário:**
Escreva um programa em JavaScript que verifica se um 
número é divisível por 3 e por 5 ao mesmo tempo. 
Use a estrutura `if-else` para realizar essa verificação.
*/

function isDivisibleByThreeAndFive(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("É divisivel");
        return   true
        } else {
            console.log("Não é divisivel");
        return  false
    }
}

let number = 2

isDivisibleByThreeAndFive(number)
