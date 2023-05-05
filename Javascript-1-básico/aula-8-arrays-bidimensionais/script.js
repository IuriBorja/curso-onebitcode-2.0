const arr = [
    ['ovo', 'farinha', 'banana'],
    ['ovni', 'eva', 'teste'],
    ['dj', 'musica', 'cantor'],
];


console.log(arr[1][0]); //ovni



//iterando com for arrays bidimensionais

//deve se criar um novo loop for dentro de outro loop para cada camada interior da array
//nesse exemplo foram 2 camadas e portanto usei 2 loops,
//se for mais de 2 camadas, o loop for deve ser repetido para cada camada
//e assim sucessivamente

for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}




// ITERANDO COM FOREACH ARRAYS BIDIMENSIONAIS


arr.forEach(function(row) {
    row.forEach(function(cell) {
        console.log(cell);
    });
});