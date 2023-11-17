/*
Exercício Fácil:
Escreva um programa em JavaScript que recebe uma cor em inglês e retorna
 o seu nome em português. Utilize a estrutura switch/case para realizar 
 essa verificação. As cores podem ser: "red" (vermelho), "blue" (azul), "green" (verde), "yellow" 
 (amarelo) e "black" (preto).

*/
function getColorName(color){
    let colorName;
    
    switch(color){
        case 'red':
            colorName = 'Vermelho';
            break;
        case 'blue':
            colorName = 'Azul';
            break;
        case 'green':
            colorName = 'Verde';
            break;
        case 'yellow':
            colorName = 'Amarelo';
            break;
        case 'black':
            colorName = 'Preto';
            break;
        default:
            colorName = 'Cor inválida!';
    }
    return colorName;
}

console.log(getColorName('red')); 
console.log(getColorName('blue')); 
console.log(getColorName('green')); 


const colors = {
    red: 'Vermelho',
    blue: 'Azul',
    green: 'Verde',
    yellow: 'Amarelo',
    black: 'Preto'
};
console.log(colors['red']); 
console.log(colors['blue']);
console.log(colors['green']);
