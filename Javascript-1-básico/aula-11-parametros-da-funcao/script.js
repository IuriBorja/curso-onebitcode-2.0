function dobro(x) {
    console.log(`O dobro de ${x} é ${(x * 2)}`);
}
/* dobro(5);
dobro(7);
 */

//dobro(); //undefined


function dizerOla(nome = 'Mundo') {
    console.log(`Olá ${nome}!`);
}

/* dizerOla('Iuri'),
dizerOla(); */

function soma(a, b) {
    console.log(`O resultado da soma é ${a + b}`);
}

/* soma(5, 7);
 */


function createUser(name, email, password, type = 'adm') {
    const user = {
        name,
        email,
        password,
        type
    }

    console.log(user);
}

/* createUser('Iuri', 'iuri@bla.com', '1234'); */







//DICA PARA UMA FUNÇÃO COM MUITOS PARAMETROS

function muitosParametros(nome, tel, endereco, aniversario, email, senha) {
    //....
}

muitosParametros('nome', 'tel', 'endereco', 'aniversario', 'email', 'senha');





function objetoComoParametro(usuario) {
    //...
    usuario.nome
    usuario.tel
    usuario.email
    usuario.senha
    usuario.endereco
    usuario.aniversario
}


const dadosDoUsuario = {
    nome: 'asdas',
    telefone:'fdfdf',
    email: 'ewfe',
    senha: 'fefw',
    edereco: 'afas',
    aniversario: 'ad2qq'
}

console.log(objetoComoParametro(dadosDoUsuario));