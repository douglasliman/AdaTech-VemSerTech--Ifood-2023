/*
2. **Exercício Moderado:**
Escreva um programa em JavaScript que recebe um número de 1 a 12 e retorna o mês correspondente.
 Caso seja um número inválido retorna "Número inválido.” Utilize a estrutura `switch/case` para 
  essa verificação.

*/
function getMonth(num) {
    switch (num) {
        case 1: return 'Janeiro';
        case 2: return 'Fevereiro';
        case 3: return 'Março';
        case 4: return 'Abril';
        case 5: return 'Maio';
        case 6: return 'Junho';
        case 7: return 'Julho';
        case 8: return 'Agosto';
        case 9: return 'Setembro';
        case 10: return 'Outubro';
        case 11: return 'Novembro';
        case 12: return 'Dezembro';
        default: return 'Número Inválido!';
        }
}
console.log(getMonth(2)); 
console.log(getMonth(13)); 

//object literals
const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

function getMonthObjectLiteral(num){
    if(num >= 1 && num <= 12){
        return months[num - 1]
    }else{
        return 'Número Inválido!'
    }
}
console.log(getMonthObjectLiteral(4))
console.log(getMonthObjectLiteral(13))
