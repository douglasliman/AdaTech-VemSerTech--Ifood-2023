/*

5. **Exercício Desafiado**
Escreva um programa em JavaScript que recebe um número de 1 a 7 e retorna o dia da semana correspondente. Utilize a estrutura `switch/case` para realizar essa verificação.
Além disso, implemente uma verificação adicional utilizando `if-else` para retornar "Fim de semana" caso o número seja 1 ou 7 (domingo ou sábado), e "Dia útil" caso contrário.
    
    **Exemplo de uso:** `verificarDiaSemana(3)` deve retornar "Quarta-feira, Dia útil".
    
    **Dica:** Utilize os valores de 1 a 7 para representar os dias da semana, sendo 1 para domingo, 2 para segunda-feira e assim por diante.
*/      
function verificarDiaSemana(dia) {
    if (dia === 1 || dia === 7) {
        console.log("Final de semana o dia é ")
    }
  switch (dia) {

    case 1: return 'Domingo';
    case 2: return 'Segunda-feira';
    case 3: return 'Terça-feira';
    case 4: return 'Quarta-feira';
    case 5: return 'Quinta-feira';
    case 6: return 'Sexta-feira';
    case 7: return 'Sábado';    
      default:
      return 'Não é um dia da semana';
  }

}

console.log(verificarDiaSemana(2))