let nome = prompt('Digite o nome do veículo 1 :');
let nome2 = prompt('Digite o nome do veículo 2 :');

let vel = prompt('Digite a velocidade do veículo 1 :');
let vel2 = prompt('Digite a velocidade do veículo 2 :');


if (vel === vel2) {
    alert(`As velocidades são iguais : ${vel}`);
} else if ( vel > vel2) {
    alert(`O veículo ${nome} é mais rápido, com velocidade de : ${vel}km/h`);
} else {
    alert(`O veículo ${nome2} é mais rápido, com velocidade de : ${vel2}km/h`);
}





