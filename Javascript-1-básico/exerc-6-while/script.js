let nome = prompt('Digite seu nome:');

let cidade = prompt('Já visitou alguma cidade? sim/não');

let bCidades = [];
let contagem = 0;

while(cidade === 'sim') {

    let nomeCidade = prompt('Digite o nome da cidade que já visitou:');
    bCidades += ' - ' + nomeCidade + '\n';
    contagem ++;
    let nomeCidade2 = prompt('Teria mais alguma outra cidade? sim/não');

    if (nomeCidade2 === 'não') {
        break;
    }


}


alert(`Nome do turista: ${nome} \n
Quais cidades visitou: ${bCidades} \n
Quantas cidades ao total: ${contagem}`);