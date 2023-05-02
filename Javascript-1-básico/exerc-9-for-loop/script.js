

let tabuada = '';
let num = Number(prompt('Escreva um número:'));
let mensagem = '';

for(let i = 1; i <= 20; i++) {
    tabuada = 1 * num;
    mensagem += `${tabuada} x ${i} = ${tabuada * i}\n`;
}

alert(`A tabuada gerada é:\n${mensagem}`);





/*-------------------------------*/




const palavra = prompt('Informe uma palavra:');
let palavraInvertida = '';

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
    alert(`${palavra} é um palíndromo!`);
} else {
    alert(`${palavra} não é um palíndromo!
    \n\n
    ${palavra} !== ${palavraInvertida}`);
}



