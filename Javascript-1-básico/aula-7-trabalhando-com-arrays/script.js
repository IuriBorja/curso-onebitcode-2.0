const arr = ['Paccco', 'Kaira', 'Maira', 'Poly', 'Chame'];
console.log(arr);




//ADICIONAR ELEMENTOS

//push adiciona ao final da array
arr.push('Pye');
console.log(arr);


//unshift adiciona ao começo da array
arr.unshift('Uol');
console.log(arr);


//REMOVER ELEMENTOS

//pop remove o ultimo elemento da array
arr.pop();
console.log(arr);


//shift remove o primeiro elemento
arr.shift();
console.log(arr);


//PESQUISAR POR UM ELEMENTO

//includes pesquisa um elemento e devolve um valor booleano, true ou false
let inclui = arr.includes('Maira');
console.log(arr);
console.log(inclui);


//indexOf pesquisa o indice do elemento
let indice = arr.indexOf('Maira');
console.log(arr);
console.log(indice);




//CORTAR E CONCATENAR


//slice corta uma parte daquele array e cria uma copia dos elementos cortados
let corte = arr.slice(0,2);
let corte2 = arr.slice(-2); //de trás 
console.log(arr);
console.log(corte);
console.log(corte2);


//concat concatena dois arrays e/ou novos elementos
let concat = arr.concat(corte, 'novo elemento');
console.log(concat);




//SUBSTITUIÇÃO DOS ELEMENTOS


//splice remove um elemento especifico e substitui outro em seu lugar , ou pode add mais se quiser

let elementoRemovido = arr.splice(indice, 1, 'teste');
console.log(concat);
console.log(elementoRemovido);



//ITERAR SOBRE OS ELEMENTOS

for (let indice = 0; indice < arr.length; indice++) {
    const element = arr[indice];
    console.log(`${element} se encontra na posição ${indice}`);
}