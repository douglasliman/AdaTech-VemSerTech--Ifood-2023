/*
4. **Exercício Avançado:**
Escreva um programa em JavaScript que verifica se um ano é bissexto. Use a estrutura `if-else` para realizar essa verificação. 

**Dica:** um ano bissexto é divisível por 4, mas não por 100, a menos que também seja divisível por 400.
*/


function isBissexto(year){

    if (year % 4 == 0 && ((year % 100 != 0) || (year % 400 == 0))){
        return     console.log(`O ${year} é um ano bissexto.`);;
    } else {
        return  console.log(`O ${year} não é um ano bissexto.`);;
    }

}


let year = 2004;

isBissexto(year);


