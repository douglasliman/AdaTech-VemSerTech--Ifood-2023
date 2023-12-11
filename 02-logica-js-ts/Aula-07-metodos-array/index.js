/*
Pop() -> remove o último elemento de um array e retorna este elemento
Push() -> adiciona um ou mais elementos ao final de um array e retorna o tamanho deste array
Shift() -> remove o primeiro elemento de um array e retorna esse elemento
Unshift() -> adiciona um ou mais elementos no início de um array e retorna o tamanho deste array
*/
const numbers = [1, 2, 3];
const length = numbers.push(4, 5);
const inicio = numbers.unshift(0);


console.log(numbers); 
console.log(length);
console.log(inicio)


/*
at() - acessar um dado
slice(-1)[0])
*/
const fruits = ["apple", "banana", "orange", "grape", "mango"];
console.log(fruits.at(1)); 
console.log(fruits.at(-2)); 
console.log(fruits[fruits.length - 1]);

/*
every() - é um boolean para verificar se o array satifaz ( se tem X item) 
 */

const numbersArray = [1, 2, 3, 4, 5];
const even = numbers.every(((num) => {

    return num % 2 === 0    

 }))
console.log(even); 
// second  
const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.every(word => word.length >= 5);
console.log(longEnough); 

/*
==========================================================
filter() - filtrar listas, nome, idades, entre outras coisas

Sintaxe
array.filter(function(valor[, índice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])
*/

const numberFilter = [1, 2, 3, 4, 5];
const evenNumbers = numberFilter.filter(num => num % 2 === 0);

console.log(numberFilter)
console.log(evenNumbers);


const wordsFilter = ["apple", "banana", "cherry", "date"];
const longWords = wordsFilter.filter(word => word.length >= 6);
console.log(wordsFilter)
console.log(longWords);

/*
==========================================================
find() - acha somente o primeiro.

Sintaxe
array.find(function(valor[, índice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])


*/
const numbersFind = [1, 2, 3, 4, 5];
const evenFind = numbersFind.find(num => num % 2 === 0);
console.log(evenFind);

const wordsFind = ["apple", "banana", "cherry", "date"];
const longEnoughFind = wordsFind.find(word => word.length >= 6);
console.log(longEnoughFind);

/*
==========================================================
forEach()
O método forEach() é utilizado para executar uma função fornecida uma
 vez para cada elemento do array. A função é executada com 
 três argumentos: o valor do elemento atual, o índice do elemento atual e
  o array em que o método forEach() foi chamado.

Sintaxe

array.forEach(function(valorAtual[, indice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])

*/

const numbersForEach = [1, 2, 3, 4, 5];
numbersForEach.forEach(num => console.log(num));

/*
==========================================================
map()
O método map() é utilizado para criar um novo array 
preenchido com os resultados da chamada de uma função
 fornecida em cada elemento no array de chamada. 
 Em outras palavras, ele nos permite aplicar uma função a 
 cada elemento do array original e criar um novo array contendo
  os resultados dessas operações.

Sintaxe

array.map(function(valorAtual[, indice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])

*/

const numbersMap = [1, 2, 3, 4, 5];
const squares = numbersMap.map(num => num * num);
console.log(squares);
