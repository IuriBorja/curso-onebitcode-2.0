//comparadores de igualdade

console.log(3 == "3"); // true, o comparador de dois iguais == só compara o dado e nao o tipo do dado
console.log(3 === "3"); //false, o de 3 compara tudo e por isso é mais usado, compara tb o tipo

console.log(3 != "3"); //false, o mesmo problema do de cima, só compara o dado e nao o tipo
console.log(3 !== "3"); //true, esse compara tudo e confirma que os tipos dos dados sao diferentes sim

//comparadores de tamanho / grandeza

console.log("###########");

console.log(3 > 4); //false, 3 não é maior que 4
console.log(3 < 4); //true, 3 é menor que 4
console.log(3 >= 4); //false, 3 não é maior ou igual que 4
console.log(3 <= 4); //true, 3 não é igual a 4 mas é menor que 4
