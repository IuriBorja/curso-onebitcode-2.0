/* Função recursiva é aquela que chama a propria função */

/* é uma especie de loop porem com funções */


function dividir(num) { //funcao dividir com parametro num
    console.log(num);
    if(num % 2 === 0) { //enquanto for par esse statment será true e voltará para o inicio da funcao
        dividir(num / 2);
    } else {
        return num; // aqui é quando o numero impar chegar e a função para
    }
}

//dividir(256); //246, 128, 64, 32, 16, 8, 4, 2, 1


//fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1

function fatorial(num) {
    console.log(`Número: ${num}`);
    if (num === 0) {
        return 1;
    } else if (num === 1) {
        return 1;
    } else {
        console.log(`${num} * !${(num - 1)}`);
        return num * fatorial(num - 1);
    }
}

console.log(fatorial(5));