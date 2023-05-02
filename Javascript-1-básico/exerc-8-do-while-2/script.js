let menu = '';
money = Number(prompt('Qual o valor inicial de dinheiro?'));

do {
    menu = prompt(`O valor inicial é : ${money}
    \n1)Adicionar mais dinheiro.
    \n2)Remover dinheiro.
    \n3)Encerrar.`);

    switch(menu) {
        case '1':
            let soma = Number(prompt('Digite o valor a adicionar:'));
            money += soma;
            break;
        case '2':
            let sub = prompt('Digite o valor a retirar:');
            money -= sub;
            break;
        case '3':
            alert('Encerrando...');
            break;    
        default:
            alert('erro');
            break;        
    }
} while ( menu !== '3')




