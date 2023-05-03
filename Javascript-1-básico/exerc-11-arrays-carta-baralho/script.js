let menu = '';
let lista = [];

do {

    menu = prompt(`Baralho: 
    ${lista} \n
    \n1) Adicionar uma carta.
    \n2) Puxar uma carta.
    \n3) Sair`);

    switch(menu) {
        case '1':
            let carta = prompt(`Nome da Carta: \n`);
            lista.unshift(carta);
            break;
        case '2':
            if(lista.length === 0) {
                alert('Baralho sem cartas!');
            } else {
                alert(`Carta ${lista.shift()} retirada do topo do baralho.`);
            }    
            break;
        case '3':
            alert('Finalizando...');
            break;
        default:
            alert('Erro');
            break;        
    }

} while (menu !== '3')