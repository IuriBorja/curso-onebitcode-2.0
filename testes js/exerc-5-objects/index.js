let pessoa = {
    nome: 'João',
    idade: 25,
    profissao: 'programador'
};

/* console.log(pessoa.nome, pessoa.idade, pessoa.profissao); */


/* ---------------- */



/* let carro = {};

carro.marca = 'Ford';
carro.modelo = 'Fusca';
carro.ano = 2018;


console.log(carro); */

/* ----------------- */


/* let retangulo = {
    largura: 3,
    altura: 5,
    calcularArea: function() {
        return this.largura * this.altura;
    }
};

const area = retangulo.calcularArea();

console.log(area); */




/* --------------------- */

/* 
let produto = {
    nome: 'Notebook',
    preco: 200,
    disponivel: true
};

function verificarDisponibilidade(produto) {
    if (produto.disponivel) {
        console.log('Estoque disponível');
    } else {
        console.log('Estoque indisponível');
    }
}


verificarDisponibilidade(produto); */



/* ---------------------- */






let objeto1 = {
    nome: 'João',
    idade: 25
};
let objeto2 = {
    nome: 'Maria'
};
let objeto3 = {
    nome: 'Ana'
};



function mesclarObjetos(objeto1, objeto2, objeto3) {
    let novoObjeto = {
        ...objeto1,
        ...objeto2,
        ...objeto3
    };
    return novoObjeto;
}

let result = mesclarObjetos(objeto1, objeto2, objeto3)


console.log(result);