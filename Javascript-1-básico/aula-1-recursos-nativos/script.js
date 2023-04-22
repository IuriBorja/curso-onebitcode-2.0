let nome = "Iuri";


console.log(nome); //mostrar informações
console.error(nome); //mostrar erro
console.warn(nome); //mostrar algo para se ter atenção



window.alert(nome); //serve como um alerta para mostrar uma mensagem


nome = window.prompt('Insira o seu nome:'); //permite que salve valores e manipule os mesmos

console.log(nome);


let confirmar = window.confirm('Escolha ok ou cancelar');//permite ter valor booleano escolhendo sim ou nao


console.log(confirmar);


//window é um objeto global , da para escrever sem por window

alert('Ola mundo');
prompt('bla bla');
confirm('confirma?');


//document faz referencia a uma pagina HTML é um objeto da arvore DOM

document.getElementById('');