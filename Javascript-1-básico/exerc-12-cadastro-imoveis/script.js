let menu = '';
let listaImoveis = [];
let contagem = 0;
let obj = {};

do {

    menu = prompt(`Cadastro de imóveis: 
    \nQuantidade de imóveis cadastrados : ${contagem}
    \n1) Cadastrar novo imóvel:
    \n2) Mostrar os imóveis salvos.
    \n3) Sair`);

    switch (menu) {
        case '1':
            let nome = prompt('Nome do proprietário:');
            let quartos = Number(prompt('Quantos quartos?'));
            let banheiro = Number(prompt('Quantos banheiros?'));
            let garagem = prompt('Possui garagem? sim/não');

            obj = {
                nome: nome,
                quartos: quartos,
                banheiro: banheiro,
                garagem: garagem
            };

            listaImoveis.push(obj);
            contagem++;
            break;
        case '2':
            if(listaImoveis.length === 0) {
                alert('Não há imóveis cadastrados.')
            } else {
            let lista = '';
                for (let i = 0; i < listaImoveis.length; i++) {
                lista += `\nProprietário: ${listaImoveis[i].nome} \nQuartos: ${listaImoveis[i].quartos} \nBanheiros: ${listaImoveis[i].banheiro} \nGaragem: ${listaImoveis[i].garagem} \n`;
                }
            alert(`Lista dos imóveis cadastrados: \n ${lista}`);
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
