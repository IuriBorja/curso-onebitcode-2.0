let um = document.getElementById('nUm');
let dois = document.getElementById('nDois');

let res = document.getElementById('res');


function calcular() {

    let numeroUm = Number(um.value);
    let numeroDois = Number(dois.value);



    let soma = numeroUm + numeroDois;
    let sub = numeroUm - numeroDois;
    let mult = numeroUm * numeroDois;
    let divi = numeroUm / numeroDois;


    res.innerHTML = `A soma de ${numeroUm} com ${numeroDois} é ${soma}.<br>
    A subtração de ${numeroUm} com ${numeroDois} é ${sub}.<br>
    A multiplicação de ${numeroUm} com ${numeroDois} é ${mult}.<br>
    A divisão de ${numeroUm} com ${numeroDois} é ${divi}.`;


}