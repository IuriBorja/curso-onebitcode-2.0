function areaTriangulo() {
    const base = Number(prompt('Digite a base do triângulo:'));
    const altura = Number(prompt('Digite a altura do triângulo:'));
    return base * altura / 2;
}

function areaRetangulo() {
    const base = Number(prompt('Digite a base do retângulo:'));
    const altura = Number(prompt('Digite a altura do retângulo:'));
    return base * altura;
}

function areaQuadrado() {
    const lado = Number(prompt('Digite o lado do quadrado:'));
    return lado * lado;
}

function areaTrapezio() {
    const baseMaior = Number(prompt('Digite a base maior do trapézio:'));
    const baseMenor = Number(prompt('Digite a base menor do trapézio:'));
    const altura = Number(prompt('Digite a altura do trapézio:'));
    return (baseMaior + baseMenor) * altura / 2;
}

function areaCirculo() {
    const raio = Number(prompt('Digite o raio do círculo:'));
    return raio * raio * Math.PI;
}



function menu() {
    return prompt(`Calculadora Geométrica. \nSelecione uma opção de cálculo:
    \n1) Área do triângulo: base * altura / 2
    \n2) Área do retângulo: base * altura
    \n3) Área do quadrado: lado²
    \n4) Área do trapézio: (base maior + base menor) * altura / 2
    \n5) Área do círculo: pi * raio² (considere pi = 3.14)
    \n6) Sair`);
}


function executar() {
    let opcao = '';

    do {
        opcao = menu();
        let resultado;

        switch(opcao) {
            case '1':
                resultado = areaTriangulo();
                break;
            case '2':
                resultado = areaRetangulo();
                break;
            case '3':
                resultado = areaQuadrado();
                break;
            case '4':
                resultado = areaTrapezio();
                break;
            case '5':
                resultado = areaCirculo();
                break;
            case '6':
                alert('Encerrando...');
                break;
            default:
                alert('Opção inválida. Tente novamente.');
                break;
        }

        if (resultado) {
            alert(`O resultado da operação é: ${resultado}`);
        }

    } while(menu !== '6')
}

executar();