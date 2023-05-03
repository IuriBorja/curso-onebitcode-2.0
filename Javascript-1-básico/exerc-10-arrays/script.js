let menu = '';
let lista = [];

do {

    menu = prompt(`Lista de pacientes: 
    ${lista} \n
    \n1) Adicionar novo paciente a fila.
    \n2) Remover paciente da fila.
    \n3) Sair`);

    switch (menu) {
        case '1':
            let nome = prompt('Nome do paciente: ');
            lista.push(nome);
        break;
        case '2':
            if (lista.length === 0) {
                alert('Não há mais pacientes para atender!');
            } else {
                alert(`Removendo ${lista.shift()} da lista`);
            }
        break;
        case '3':
            alert('Finalizando...');
        break;
        default:
            alert('erro');
        break;        
    }

} while (menu !== '3')