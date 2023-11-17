/*
4. **Exercício Avançado:**
Crie um programa em JavaScript que implemente uma calculadora básica. 
A função `calculadora` receberá dois números como parâmetro e um terceiro
 parâmetro indicando a ação a ser executada. Utilize a estrutura `switch/case`
  para realizar a operação correta com base na ação fornecida. As ações possíveis
   são: "somar", "subtrair", "dividir" e "multiplicar". O resultado da operação deve 
   ser retornado pela função.

    Math.max, Math.min
    **Exemplo de uso:** `calculadora(5, 3, "somar")` deve retornar 8;
*/
function calculadora (num1, num2, math) {
    switch (math){
        case 'somar': return num1 + num2;
        case 'subtrair': return num1 - num2;
        case 'dividir': return num1 / num2;
        case 'multiplicar': return num1 * num2;
        default: console.log('Opção inválida');
    }
    }
    console.log(calculadora(5, 3, "somar")); 


    const calc = {
        soma: function(n1, n2){return n1+n2},
        subtrai: function(n1, n2){return n1-n2},
        divide: function(n1, n2){return n1/n2},
        multiplica: function(n1, n2){return n1*n2}
    };

    console.log(calc.soma(5, 10)); 


    
