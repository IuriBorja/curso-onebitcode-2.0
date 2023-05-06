function calcularMedia(a, b) {
    const media = (a + b) / 2;
    return media;
}

const resultado = calcularMedia(5, 8);

console.log(resultado);



function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto;
}

console.log(criarProduto('Notebook Asius 8GB', '1200'));




function areaRetangular(base, altura) {
    return base * altura;
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado);
}

console.log(areaRetangular(3, 5));

console.log(areaQuadrada(9));



function maioridade(idade) {
    if (idade < 18) {
        return 'Não vota';
    } else {
        return 'Vota';
    }
}


console.log(maioridade(29));
console.log(maioridade(13));