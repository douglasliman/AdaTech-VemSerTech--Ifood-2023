let matriz = [
    [1, 2],
    [3, 5]

];
let num1 = matriz[0][0];
let num2 = matriz[1][1];


let num3 = matriz[0][1];
let num4 = matriz[1][0];

let determinante = (num1 * num2 ) - (num3 * num4);



console.log(determinante);
