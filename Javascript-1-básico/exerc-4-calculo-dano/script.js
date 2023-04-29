let nAtacante = prompt("Nome do personagem atacante:");

let pAtaque = Number(prompt("Digite o poder de ataque: "));

let nDefensor = prompt("Nome do personagem defensor:");

let qVida = Number(prompt("Digite a quantidade de pontos de vida: "));

let pDefesa = Number(prompt("Digite o poder de defesa: "));

let escudo = prompt("Ele possue escudo? sim/não");

let dano = "";

if (pAtaque > pDefesa && escudo === "não") {
    dano = pAtaque - pDefesa;
} else if (pAtaque > pDefesa && escudo === "sim") {
    dano = (pAtaque - pDefesa) / 2;
} else if (pAtaque <= pDefesa) {
    dano = 0;
}

let resultado = qVida - dano;

prompt(`Nome atacante: ${nAtacante} \n
Poder de ataque: ${pAtaque} \n
Nome do defensor: ${nDefensor} \n
Quantidade de vida: ${qVida} \n
Poder de defesa: ${pDefesa} \n
Possue escudo? ${escudo} \n

O personagem atacante ${nAtacante} deu um dano de ${dano} 
e o personagem defensor ficou com total de pontos de vida de ${resultado}`);
