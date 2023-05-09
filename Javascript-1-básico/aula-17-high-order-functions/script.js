function calcular(a, b, operacao) {
    console.log('Realizando uma operação...');
    const resultado = operacao(a, b);
    return resultado;
}

function soma(x, y) {
    console.log('Realizando uma soma...');
    return x + y;
}

function sub(e, f) {
    console.log('Realizando uma subtração..');
    return e - f;
}



console.log(calcular(4, 6, sub));



console.log(calcular(4, 6, function(i, u) {
    console.log('Realizando uma multiplicação...');
    return i * u;
}));





const lista = ['banana', 'maçã', 'abacaxi', 'limão'];



function exibirElemento(elemento, indice , array) {
    console.log({
        elemento,
        indice,
        array
    })
}


lista.forEach(exibirElemento);