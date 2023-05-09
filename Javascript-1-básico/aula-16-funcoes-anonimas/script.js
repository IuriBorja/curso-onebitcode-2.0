//funcao anonima é a que se cria dentro de uma variavel


const olaMundo = function() {
    console.log('Olá Mundo');
}

olaMundo();


//assim como var e let, funcao anonima e funcao normal tem comportamentos diferentes aonde sao chamadas


teste(); // roda normal
dizerOi(); //Cannot access 'dizerOi' before initialization, ou seja, para chamar funçoes anonimas
//deve sempre chama-la APOS elas serem criadas


function teste() {
    console.log('teste');
}

const dizerOi = function () {
    console.log('Oi');
}