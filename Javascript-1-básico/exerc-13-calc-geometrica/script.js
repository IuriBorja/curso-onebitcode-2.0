let num = '';
let menu = '';

do {

    /* num = Number(prompt('Digite um número:')); */


    menu = prompt(`Calculadora Geométrica. \nSelecione uma opção de cálculo:
    \n1) Área do triângulo: base * altura / 2
    \n2) Área do retângulo: base * altura
    \n3) Área do quadrado: lado²
    \n4) Área do trapézio: (base maior + base menor) * altura / 2
    \n5) Área do círculo: pi * raio² (considere pi = 3.14)
    \n6) Sair`);


    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }

    function areaRetangulo(base, altura) {
        return (base * altura);
    }

    function areaQuadrado(lado) {
        return (lado * lado);
    }

    function areaTrapezio(baseMaior, baseMenor,altura) {
        return ((baseMaior + baseMenor) * altura / 2);
    }

    function areaCirculo(raio, pi = 3.14) {
        return (pi * (raio * raio));
    }



    switch(menu) {
        case '1':
            num = Number(prompt('Digite o valor da base:'));
            num = Number(prompt('Digite o valor da altura:'));
            alert(`O resultado da área do triângulo é: ${areaTriangulo(num, num)}`);
            break;
        case '2':
            num = Number(prompt('Digite o valor da base:'));
            num = Number(prompt('Digite o valor da altura:'));
            alert(`O resultado da área do retângulo é: ${areaRetangulo(num, num)}`);
            break;
        case '3':
            num = Number(prompt('Digite o valor do lado:'));
            alert(`O resultado da área do quadrado é: ${areaQuadrado(num)}`);
            break;
        case '4':
            num = Number(prompt('Digite o valor da base menor:'));
            num = Number(prompt('Digite o valor da base maior:'));
            num = Number(prompt('Digite o valor da altura:'));
            alert(`O resultado da área do trapézio é: ${areaTrapezio(num, num, num)}`);
            break;
        case '5':
            num = Number(prompt('Digite o valor do raio:'));
            alert(`O resultado da área do círculo é: ${areaCirculo(num)}`);
            break;
        case '6':
            alert('Finalizando...');
            break;
        default:
            alert('Opção inválida');
            break;
    }



} while (menu !== '6')