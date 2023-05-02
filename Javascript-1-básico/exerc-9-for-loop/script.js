

let tabuada = '';
let num = Number(prompt('Escreva um número:'));
let mensagem = '';

for(let i = 1; i <= 20; i++) {
    tabuada = 1 * num;
    mensagem += `${tabuada} x ${i} = ${tabuada * i}\n`;
}

alert(`A tabuada gerada é:\n${mensagem}`);
