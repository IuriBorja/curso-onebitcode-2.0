let pessoa = {
    nome: palavras = ['Jõao', 'Iuri', 'Anta', 'Thiago', 'EasterEgg'],
    idade: Math.floor(Math.random() * 100),
    aleatoria: palavras[Math.floor(Math.random() * palavras.length)],
    dizerOla() {
        console.log(`Olá, meu nome é ${this.aleatoria} e tenho ${this.idade} anos.`);
    }
};

/* console.log(pessoa); */
pessoa.dizerOla();