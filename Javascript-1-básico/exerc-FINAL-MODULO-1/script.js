const vagas = [];


function listarVagas() {
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice) {
        textoFinal += indice + '. ';
        textoFinal += vaga.nome;
        textoFinal += `(${vaga.candidatos.length} candidatos)`;
        return textoFinal;
    }, '')
    alert(vagasEmTexto);
}


function novaVaga() {
    const nome = prompt('Informe um nome para a vaga:');
    const descricao = prompt('Informe uma descrição para a vaga:');
    const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga:');

    const confirmacao = confirm(
        `Deseja criar uma nova vaga para essas informações?\n
        Nome: ${nome}\n
        Descrição. ${descricao}\n
        Data Limite: ${dataLimite}`
    )

    if(confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga);
        alert('Vaga criada');
    }


}


function exibirVaga() {
    const indice = prompt('Informe o índice da vaga que deseja exibir:');

    if(indice >= vagas.length || indice < 0) {
        alert('Índice inválido');
        return
    }

    const vaga = vagas[indice];

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + '\n - ' + candidato;
    }, '');

    alert(`
    \nVaga nª ${indice}
    \nNome: ${vaga.descricao}
    \nData Limite: ${vaga.dataLimite}
    \nQuantidade de candidatos: ${vaga.candidatos.length}
    \nCandidatos inscritos: ${candidatosEmTexto}`);

}


function inscreverCandidato() {
    const candidato = prompt('Informe o nome do candidato(a):');
    const indice = prompt('Informe o índice da vaga:');
    const vaga = vagas[indice];

    const confirmacao = confirm(`
    Deseja inscrever o candidato ${candidato} na vaga ${indice}?
    \nNome: ${vaga.nome}
    \nDescrição: ${vaga.descricao}
    \nData Limite: ${vaga.dataLimite}`);

    if(confirmacao) {
        vaga.candidatos.push(candidato);
        alert('Candidato inscrito com sucesso');
    }
}

function excluirVaga() {
    const indice = prompt('Informe o índice da vaga que deseja excluir:');
    const vaga = vagas[indice];

    const confirmacao = confirm(`
    Tem certeza que deseja excluir a vaga ${indice}?
    \nNome: ${vaga.nome}
    \nDescrição: ${vaga.descricao}
    \nData Limite: ${vaga.dataLimite}`);


    if (confirmacao) {
        vagas.splice(indice, 1);
        alert('Vaga excluída com sucesso');
    }
}

function exibirMenu() {
    const opcao = prompt(`
    Cadastro de Vagas para Emprego:
    \nEscolha uma das opções:
    \n1) Listar vagas disponíveis:
    \n2) Criar uma nova vaga:
    \n3) Visualizar uma vaga:
    \n4) Inscrever um(a) candidato(a)
    \n5) Excluir uma vaga
    \n6) Sair`);

    return opcao
}

function executar() {
    let opcao = '';

    do {
        opcao = exibirMenu();


        switch(opcao) {
            case '1':
                listarVagas();
                break;
            case '2':
                novaVaga();
                break;
            case '3':
                exibirVaga();
                break;
            case '4':
                inscreverCandidato();
                break;
            case '5':
                excluirVaga();
                break;
            case '6':
                alert('Encerrando...');
                break;
            default:
                alert('Opção inválida. Tente novamente.');
                break;
        }

    } while (opcao !== '6')
}

executar();


