let pNome = document.getElementById('pnome');
let sNome = document.getElementById('snome');
let estudo = document.getElementById('estudo');
let anoNasc = document.getElementById('anoNasc');

let res = document.getElementById('res');


function enviar() {

    if (pNome.value.length === 0 && sNome.value.length === 0 && estudo.value.length === 0) {
        alert('ERRO , preencha o cadastro.')
    } else {
        let primeiroNome = pNome.value;
        let sobrenome = sNome.value;
        let nivelEstudo = estudo.value;
        let anoNascimento = anoNasc.value;

        res.innerHTML = `Seu primeiro nome é ${primeiroNome} e sobrenome ${sobrenome} no campo de estudo ${nivelEstudo} nascido no ano de ${anoNascimento}`;



        /* window.alert(`Seu primeiro nome é ${primeiroNome} e sobrenome ${sobrenome} no campo de estudo ${nivelEstudo} nascido no ano de ${anoNascimento} `); */

    }


}